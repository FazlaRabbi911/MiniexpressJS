const http = require('http');
const fs = require('node:fs/promises');
const path = require('path');


class MiniExpress{
    constructor(){
        this.server = http.createServer()
        this.routes = {} // route storage
        this.server.on('request',async (req, res)=>{ // main server request handler
            
            res.sendFile = async (path , mimeType)=>{ // send file method
                const filePath = await fs.open(path, 'r')
                const filestream = filePath.createReadStream()
                res.writeHead(200, {'Content-Type': mimeType})
                filestream.pipe(res)
            }
            res.sendJson =(data)=>{     // json data header
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(data))
            }
            
            const routeKey = req.method + req.url;  
            const routeHandler = this.routes[routeKey]; // match the route key with the route handler
            
            if (routeHandler) {
                routeHandler(req, res); // method property is used to call the route handler
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
            } 
        })
    }
    route(method, url, callback){
        this.routes[method+url] = callback
    }

    listen(port, callback){
        this.server.listen(port, ()=>{
            callback()
        })
    }
}
module.exports = MiniExpress