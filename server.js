const express = require('express');
const app = express();
const path = require('path');
//const flash = require('express-flash-messages');
require('dotenv').config();


//--------------------------------------------------------------------
//      transférer les sessions à toutes les vues (templates)
//--------------------------------------------------------------------
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
})

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views',path.join(__dirname,'templates'));
app.set('view engine','pug');

//app.use(flash());

//const router = require('./app/roustes.js');
const router = require(path.join(__dirname,'app','routes.js'));
router(app);

app.listen(process.env.PORT,() => {
    if(process.env.APP_ENV == 'dev'){
        console.log(`Le serveur est démarré : http://localhost:${process.env.PORT}`)

    }
});