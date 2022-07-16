import { Request, Response } from 'express'
import { Company } from '../models/company'

export const companiesController = {

    //GET /companies
    index: async(req: Request, res: Response) => {
        try {
            const companies = await Company.findAll()
            return res.json(companies)
        } catch (error) {
            if (error instanceof Error){
                return res.status(400).json({ message: error.message})
            }
        }
    }
}