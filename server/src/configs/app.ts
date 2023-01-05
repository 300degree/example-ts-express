import Express from 'express';

export default class Server {

    private app: Express.Application;
    private port: number;

    constructor(port: number) {
        this.app = Express();
        this.port = port;
        this.loadRoutes();
    }
    
    private loadRoutes():void {
        this.app.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            res.send()
        })
        this.app.post('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            res.json('hello world')
        })

        this.app.get('/test', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
            res.send('test')
        })
    }

    public run():void {
        this.app.listen(this.port, () => {
            console.log(`Server run at http://localhost:${this.port}`);

        })
    }
}