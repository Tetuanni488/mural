import dotenv from "dotenv";
dotenv.config();

export default {
    jwtSecret: process.env.JWT_S || 'secret',
    DATABASE:{
        NAME: process.env.MONGO_DATABASE || 'mural',
        HOST: process.env.MONGO_HOST || 'localhost',
        USER: process.env.MONGO_USER || 'admin',
        PASSWD: process.env.MONGO_PASSWD || 'admin'

    }
}