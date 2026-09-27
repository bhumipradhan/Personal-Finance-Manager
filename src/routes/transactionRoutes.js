const express = require ("express")
const router = express.Router();
const controller = require("../controllers/transactionController");
const createTransaction=controller.createTransaction;
router.post('/',(createTransaction));

module.exports =router;