import { ICreateSpecificationDTO } from "./SpecificationsRepository";
import { Specification } from "../model/Specification";

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): Specification[];
  findByName(name: string): Specification;
}

export { ISpecificationsRepository };
