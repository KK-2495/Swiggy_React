import dotenv, { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import path from  "path";
import cors from "cors";
import router from "./Routes/AllRoutes.js";

const app = express();

dotenv.config();

const __dirname = path.resolve();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/v1', router);


mongoose.connect(process.env.mongoDB)
.then(()=>console.log('DB-Connected'))
.catch((err)=>console.log(err));

app.listen(process.env.port);