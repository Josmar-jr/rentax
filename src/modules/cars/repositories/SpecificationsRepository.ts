import { Specification } from "../model/Specification";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);
  }
  list(): Specification[] {
    return this.specifications;
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationsRepository };
