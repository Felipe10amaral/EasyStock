import { RepairPartRepository } from "../../repositories/implementations/RepairPartRepository";
import { ListRepairPartController } from "./ListRepairPartController";
import { ListRepairPartUseCase } from "./ListRepairPartUseCase";


const repairPartRepository = RepairPartRepository.getInstance();
const listRepairPartUseCase = new ListRepairPartUseCase(repairPartRepository);
const listRepairPartController = new ListRepairPartController(listRepairPartUseCase);

export {listRepairPartController};