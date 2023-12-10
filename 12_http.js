const http= require('http')
const server=http.createServer((req,res)=>{
    console.log(req)
   if(req.url==='/'){
    res.end('welcome to our homepage')
   }
   if (req.url==='/about'){
    res.end('here is our short history')
   }
    
   res.end(`<h1> oops page not found</h1>
          <p>we cant seem to find the page you are looking for</p>
           <a href="/"> back home</a> `) 
    
})
server.listen(5000);