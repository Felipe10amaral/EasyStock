import { RepairPart } from "../../models/RepairPart";
import { IRepairPartRepository, IRepairPartDTO } from "../IRepairPartRepository";


class RepairPartRepository implements IRepairPartRepository{

    private repairPart :RepairPart[];

    private static INSTANCE :RepairPartRepository;

    private constructor(){
        this.repairPart = [];
    }

    public static getInstance(): RepairPartRepository{
        if(!RepairPartRepository.INSTANCE){
            RepairPartRepository.INSTANCE = new RepairPartRepository();
        }

        return RepairPartRepository.INSTANCE;
    }


    create({ model, quantity }: IRepairPartDTO): void {
        const addRepairPart = new RepairPart();

        Object.assign(addRepairPart, {
            model,
            quantity,
            created_at: new Date()
        })

        this.repairPart.push(addRepairPart);
    }
    list(): RepairPart[] {
        return this.repairPart;
    }
    findByModel(model: string): RepairPart {
        const verifyExistsRepairPart = this.repairPart.find(repairPart => repairPart.model === model);
        return verifyExistsRepairPart;
    }

}

export {RepairPartRepository}