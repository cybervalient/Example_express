/*const math = require('./math1.js')
const os = require('os');
const http = require('http');
/*console.log(math.add(2,3));
console.log(math.multiply(2,3));
console.log(math.divide(1,0));

console.log(os.cpus());
console.log(os.hostname());
console.log(os.arch());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.platform());

http.createServer(function (req,res){
    res.write('<h1>Hola mundo desde el Node js</h1>');
    res.end();
}).listen(2000);*/

const express = require('express');
const color = require('color');
const morgan = require('morgan');

const { nextTick } = require('vue');
//const chalks = require('chalk');

const app = express();
const port = 5000;

//middleware
function logger(req,res,next){
    next();
}

app.use(express.json());
app.use(logger);
app.use(morgan('dev'));


app.all('/user', (req, res,next) => {
    console.log('POR AQUI pASO');
    res.send('termine');
    next();
  });

/*app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
})*/

app.get('/user', (req, res) => {
    res.json({username : 'Yoan',
    lastname :'Martinez'});
  });

app.get('/about', (req, res) => {
    res.send('Acerca de');
  });

app.post('/me', (req, res) => {
    res.send('me');
  })

app.put('/test', (req, res) => {
    res.send('<H1>Test</H1>>');
  });  

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor Express.js escuchando en el puerto ${port}`);
});
