import mongoose from 'mongoose';
import config from './config/config';

const options: object= {
    useNewUrlParser: true,
    useUnifiedTopology: true

};

mongoose.connect(config.DATABASE.URI, options)

mongoose.connection
    .once('open', () =>{
        console.log('Conection establecida');
    })
    .on('error', err =>{
        console.log(err);
        process.exit(0);
    });