import { RepairPart } from "../../models/RepairPart";
import { IRepairPartRepository } from "../../repositories/IRepairPartRepository";


class ListRepairPartUseCase {

    constructor( private listRepairPartRepository: IRepairPartRepository){}

    execute(): RepairPart[]{
        const all = this.listRepairPartRepository.list();
        return all;
    }
}

export {ListRepairPartUseCase}