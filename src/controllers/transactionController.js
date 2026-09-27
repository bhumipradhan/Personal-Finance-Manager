const prisma = require("../lib/prisma.js")
const createTransaction = async (req, res) =>{
 try {
        const {amount, type, categoryId,date,notes,isRecurring}=req.body;
    const newTransaction= await prisma.transaction.create({
        data:{
            amount,
            type, 
            categoryId,
            date,
            notes,
            isRecurring
        }
    });
    res.status(201).json(newTransaction);
}
catch(error){
    res.status(500).json("Server Error!");
}
};

module.exports={createTransaction};