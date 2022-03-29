import { RepairPart } from "../models/RepairPart";
import { IRepairPartRepository, IRepairDTO } from "./IRepairPartRepository";


class RepairPartRepository implements IRepairPartRepository{

    private repairPart :RepairPart[];

    constructor(){
        this.repairPart = [];
    }

    create({ model, quantity }: IRepairDTO): void {
        const addRepairPart = new RepairPart();

        Object.assign(addRepairPart, {
            model,
            quantity,
            created_at: new Date()
        })

        console.log(addRepairPart);

        this.repairPart.push(addRepairPart)
    }
    list(): RepairPart[] {
        return this.repairPart;
    }
    findByPart(model: string): RepairPart {
        const verifyRepairExist = this.repairPart.find( repairPart => repairPart.model === model);
        return verifyRepairExist;
    }
}

export {RepairPartRepository}