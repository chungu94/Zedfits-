const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname));
let messages=[]; let clients=[];
app.post('/api/chat',(req,res)=>{ const msg={id:Date.now(), text:req.body.text, from:req.body.from, time:new Date().toLocaleTimeString()}; messages.push(msg); clients.forEach(c=>c.res.write(`data: ${JSON.stringify(msg)}\n\n`)); res.json({ok:true}); });
app.get('/api/messages',(req,res)=>res.json(messages));
app.get('/api/stream',(req,res)=>{ res.setHeader('Content-Type','text/event-stream'); res.setHeader('Cache-Control','no-cache'); const client={id:Date.now(),res}; clients.push(client); req.on('close',()=>{clients=clients.filter(c=>c.id!==client.id)}); });
app.listen(7700,()=>console.log('ZED-FiTS running http://localhost:7700'));