import "reflect-metadata";
import "./shared/config/container/index";
import express, {Express } from "express";
import { PORT } from "./shared/config/secrets";
import router from "./presentation/routes/routes";
import Middlewares from "./shared/middlewares/Middlewares";

const app: Express = express();
Middlewares.aplly(app);
app.use(router);

app.listen(PORT, (): void => {
    console.log("SERVER IS RUNNING");
})