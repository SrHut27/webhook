import dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT || !Number.parseInt(process.env.PORT)) {
    throw new Error("ENV_PORT_UNDEFINED");
} 
 
if (!process.env.SECRET) {
    throw new Error("ENV_SECRET_UNDEFINED");
}

if (!process.env.PROJECT_PATH) {
    throw new Error("ENV_PROJECT_PATH_UNDEFINED");
}

if (!process.env.PROJECT_SCRIPT) {
    throw new Error("ENV_SCRIPT_PATH_UNDEFINED");
}

export const PORT: number = Number.parseInt(process.env.PORT);
export const SECRET: string = process.env.SECRET;
export const PROJECT_PATH: string = process.env.PROJECT_PATH;
export const PROJECT_SCRIPT: string = process.env.PROJECT_SCRIPT;