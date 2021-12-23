import { CategoryRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categoryRepository = new CategoryRepository();

  constructor(categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
