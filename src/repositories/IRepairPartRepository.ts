import { RepairPart } from "../models/RepairPart";

interface IRepairDTO{
    model: string;
    quantity: number;
}

interface IRepairPartRepository{
    create({model, quantity}: IRepairDTO): void;
    list(): RepairPart[];
    findByPart(model: string): RepairPart;
}

export {IRepairDTO, IRepairPartRepository};