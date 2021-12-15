import express from 'express';
import morgan from 'morgan';

//Inicializa el servidor

const app = express();

// Ajustes

app.set('port', process.env.PORT || 3000);

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Routes

app.get('/', (req,res) =>{
    res.send('hola')
})

export default app;