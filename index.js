const http=require('http');
const fs=require('fs');
const url=require('url');
const express=require('express'); 
const server =http.createServer((req,res)=>{//function myHandler(req,res){
    const log=`${Date.now().toString()}: ${req.method} : ${req.url}`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt",log,(err,result)=>{
        console.log("prince");
        switch(myUrl.pathname){
            case'/':
            if(req.method===GET)res.end("Home");
            break;
            case'/about':
            const qp=myUrl.query.myname;
            res.end(`Hi ${qp}`);
            break;
            case'/signup':
            if(req.method===GET)res.end("signup");
            else if(req.method===POST){
                //DB Query
                res.end("Success");
            }
            break;
            default:res.end("not found");

        }
    });
  //const server=http.createServer(myHandler);

});
server.listen(8000,()=>console.log("server started"));
