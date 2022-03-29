import { IRepairPartRepository } from '../repositories/IRepairPartRepository';

interface IRequest {
    model: string;
    quantity: number;
}

class CreateRepairPartService{

    constructor( private repairtPartRepository :IRepairPartRepository){}

    execute({model, quantity}: IRequest){
        const verifyRepairPart = this.repairtPartRepository.findByPart(model);

        if(verifyRepairPart){
            throw new Error( "Already Repair Part exists");
        }

        this.repairtPartRepository.create({model, quantity});
    }
}

export {CreateRepairPartService}