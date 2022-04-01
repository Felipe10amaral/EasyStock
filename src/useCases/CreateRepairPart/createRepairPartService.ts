import { IRepairPartRepository } from "../../repositories/IRepairPartRepository";

interface IRequest{
    model:string;
    quantity: number;
}

class CreateRepairPartUseCase{

    constructor( private createRepository :IRepairPartRepository){}

    execute({model, quantity}: IRequest){

        const verifyModel = this.createRepository.findByModel(model);

        if(verifyModel){
            throw new Error("Already RepairPart exists");
        }

        this.createRepository.create({model, quantity});
    }
}

export {CreateRepairPartUseCase}