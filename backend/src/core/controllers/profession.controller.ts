import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import dataSource from "../../db"
import ProfessionModel from "../models/profession.model"


class ProfessionController {
    private professions: Repository<ProfessionModel>

    constructor() {
        this.professions = dataSource.getRepository(ProfessionModel)
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        const result = await this.professions.find()
        res.json(result)
    }
}

export default ProfessionController
