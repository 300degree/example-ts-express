import Express from "express";

export default class Routes {

    private app: Express.Application;

    constructor() {
        this.app = Express();
    }

    public index():void {
        this.app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            res.send('index');
        })
    }
}