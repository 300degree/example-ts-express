import Express from 'express';
// import Routes from '../routes';

export default class Server {

    private app: Express.Application;
    private port: number;

    constructor(port: number) {
        this.app = Express();
        this.port = port
    }

    private loadRoutes():void {
        this.app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            res.send('index');
        })
    }

    public run():void {
        this.app.listen(this.port, () => {
            console.log(`Server run at http://localhost:${this.port}`);

        })
    }
}