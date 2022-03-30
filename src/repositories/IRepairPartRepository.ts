import { RepairPart } from "../models/RepairPart";

interface IRepairPartDTO {
    model: string;
    quantity: number;
}

interface IRepairPartRepository {
    create({model, quantity}: IRepairPartDTO): void;
    list(): RepairPart[];
    findByModel( model: string): RepairPart;
}

export {IRepairPartDTO, IRepairPartRepository};