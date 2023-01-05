import Express from "express"

export default class JsonResponse {

    constructor() {}

    static success(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        res.status(200).json({
            code: 200,
            message: 'Success'
        });
    }

    static serverError(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        res.status(500).json({
            code: 500,
            message: 'Internal server error'
        });
    }

    static notFound(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        res.status(404).json({
            code: 404,
            message: 'This page could not be found'
        });
    }

    

}