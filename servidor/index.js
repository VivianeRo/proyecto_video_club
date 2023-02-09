const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const { parseArgs } = require('util');
const apiRouter = ('./routes/api');
const app = express();

app.use(
    body-parseArgs.urlencoded((
        extend.true
    ))
);
app.use(dodyParser.json());
app.use(cors());

app.use('/'.appiRouter);

app.listen(3000, function(){
    console.log('Servidor funcionando en el puerto 3000');
    
})