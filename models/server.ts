import express ,{ Express } from "express";
import { conectarDB } from "../database/config";
import studentsRoutes from '../routes/studentsRoutes'
import cors from "cors"
const swaggerDocument = require("../public/swagger.json")
import SwaggerUI from "swagger-ui-express"
import path from "path"

const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ["Content-Range", "X-Content-Range"]
}
export class Server {
    app: Express;

    constructor () {
        this.app=express();
        this.conexionDB()
        this.middlewares()
        this.routes()
    }

    async conexionDB():Promise<void>{
        await conectarDB()
    }

    middlewares():void{
        this.app.use(express.json())
        this.app.use(cors(corsConfig));
        this.app.options(/(.*)/, cors(corsConfig));
        this.app.use("/docs", express.static(path.join(__dirname,"public")))
        this.app.use("/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument))
    }

    routes():void{
        this.app.use("/students",studentsRoutes)
    }

    listen():void{
        this.app.listen(8080,() => {
          console.log("Servidor iniciado en el puerto 8080")
        })
    }
}