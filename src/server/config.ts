import path from "path";
import morgan from "morgan";
import express from "express";
import routes from "../routes/index";

module.exports = app =>{

    //Settings

    app.set('port', process.env.PORT || 3000)
    app.set('views',path.join(__dirname,'../views'))
    app.engine('.hbs',exphandlebs({
        defaultLayout: "main",
        partialDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }))
    app.set('view engine', '.hbs')

    //Middlewares   

    app.use(morgan('dev'))
    app.use(multer({
        dest: path.join(__dirname,'../public/upload/temp')
    }).array("media",12))
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    app.use(pjax());

    //Routes

    routes(app)

    //Static files

    app.use('/public',express.static(path.join(__dirname, '../public')))

    //Errohandlers

    if ('development' === app.get('env')){
        app.use(errorHandler)
    }


    return app;
}