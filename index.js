const MiniExpress = require('./miniexpress')
const app = new MiniExpress()

app.route('GET', '/', (req, res) => {
    res.sendFile('./public/index.html', 'text/html');
});
app.route('GET', '/css',(req,res)=>{
    res.sendFile('./public/style.css', 'text/css');
})
app.route('GET', '/script',(req,res)=>{
    res.sendFile('./public/script.js', 'text/js');
})
app.route('GET', '/image1',(req,res)=>{
    res.sendFile('./Gallery/cr5m2.jpg', 'image/jpeg');
})
app.route('GET', '/image2',(req,res)=>{
    res.sendFile('./Gallery/img2.jpg', 'image/jpeg');
})
app.route('GET', '/image3',(req,res)=>{
    res.sendFile('./Gallery/img3.jpg', 'image/jpeg');
})


app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})

