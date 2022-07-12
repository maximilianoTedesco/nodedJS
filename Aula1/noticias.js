//const { read } = require('fs');
var http = require('http');

var server = http.createServer( function(req, res){
    
    var categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end("<html><body>Noticias de Tecnologia</body></Html>")

    } else if (categoria == '/moda') {
        res.end("<html><body>Noticias de moda</body></Html>")

    } else if (categoria == '/beleza') {
        res.end("<html><body>Noticias de beleza</body></Html>")

    } else {
        res.end("<html><body>Noticias de Tecnologia</body></Html>")
    }
}).listen(3000)