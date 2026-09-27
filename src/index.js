const express = require("express");
const app=express();
const routes=require('./routes/transactionRoutes.js');

app.use(express.json());

app.use('/api/transactions',routes);

app.get('/',(req,res)=>{
    res.send("Sever is running!");
});

const PORT=3000;
app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`);
});