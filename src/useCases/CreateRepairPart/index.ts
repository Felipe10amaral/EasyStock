import { RepairPartRepository } from "../../repositories/implementations/RepairPartRepository";
import { CreateControllerRepairPart } from "./CreateControllerRepairPart";
import { CreateRepairPartUseCase } from "./createRepairPartService";


const repairPartRepository = RepairPartRepository.getInstance();
const createRepairPartUseCase = new CreateRepairPartUseCase(repairPartRepository);
const createControllerRepairPart = new CreateControllerRepairPart(createRepairPartUseCase);

export {createControllerRepairPart};