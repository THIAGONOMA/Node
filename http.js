var router = require('./router');
var app = router(3412);

var operadoras = [
    {nome: "OI", codigo: 14, categoria:"Celular", preco:2},
    {nome: "VIVO", codigo: 15, categoria:"Celular", preco:1},
    {nome: "TIM", codigo: 41, categoria:"Celular", preco:3}
];

var contatos = [
    {id: 1, nome:"Leticia", telefone:"9999-2222", data: new Date(), operadora: operadoras[0]},  
    {id: 2, nome:"Thiago", telefone:"9999-3333", data: new Date(), operadora: operadoras[1]},
    {id: 3, nome:"NinaNino", telefone:"9999-4444", data: new Date(), operadora: operadoras[2]}
];

app.interceptor(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
});

app.interceptor(function (req,res,next){
    res.setHeader('Content-Type','application/json;charset=UTF-8');
    next();
});

app.get('/operadoras',function(req,res){
    res.write(JSON.stringify(operadoras));
    res.end();
});


app.get('/contatos',function(req,res){
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos',function(req,res){
res.end();
});


/*
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    if(req.url === '/operadoras') res.write(JSON.stringify(operadoras));
    if(req.url === '/contatos') res.write(JSON.stringify(contatos));
    if(req.method==='GET')
    res.end();
}).listen(3412);
*/