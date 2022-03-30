import {v4} from 'uuid';

class RepairPart {

    id: string;
    model: string;
    quantity: string;
    created_at?: Date;

    constructor(){
        if(!this.id){
            this.id = v4();
        }
    }
}

export {RepairPart}