import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { News } from "./models/newsModel.js";
import newsRoute from './routes/newsRoute.js';
import cors from 'cors';

const app = express();

//middleware for parsing request body
app.use(express.json());

//middleware for handling CORS policy
//option 1 allow all origin with default of cors

app.use(cors());

//option 2 allow custom origin
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send("Welcome");
});

app.use('/news', newsRoute);

mongoose.connect(mongoDBURL).then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
        console.log("App is listening oto port: ${PORT}");
    });
}).catch((error) => {
    console.log(error);
});