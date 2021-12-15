import mongoose, {ConnectOptions} from 'mongoose';
import config from './config/config';

(async () =>{
    
    const mongooseOptioms: ConnectOptions = {
        user: config.DATABASE.USER,
        pass: config.DATABASE.PASSWD
    }

    await mongoose.connect(`mongodb://${config.DATABASE.HOST}/${config.DATABASE.NAME}`)
})()

mongoose.connection
    .once('open', () =>{
        console.log('Conection establecida');
    })
    .on('error', err =>{
        console.log(err + "error");
        process.exit(0);
    });