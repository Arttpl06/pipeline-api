import express from 'express';
import healthRoutes from './src/routes/health.js';
import usersRoutes from './src/routes/users.js'

class App {
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}))
    }

    routes(){
        this.app.use("/health" , healthRoutes);
        this.app.use('/users' , usersRoutes);
    }
}


export default new App().app;