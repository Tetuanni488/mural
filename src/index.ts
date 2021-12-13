import * as express from 'express'; 
import * as path from 'path'; 
import * as http from 'http'; 
import * as bodyParser from 'body-parser'

const express = require('express');
const config = require('./server/config');
const app = config(express());

//Base de datos
require('./datebase')

// Inicializa el servidor

app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
})

class Server{
    public app: express.Application;
    
}