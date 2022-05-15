const Transaction = require('../models/Transaction');

//  @desc GET all transactions @route api/v1/transactions @access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        return res.status(500).json({
            suceess: false,
            error: 'Server Error'
        });
    }
    // res.send('GET transactions');
}

//  @desc add transactions @route api/v1/transactions @access public
exports.addTransaction = async (req, res, next) => {
    try {
        const {text, amount} = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            suceess: true,
            data: transaction
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);

            res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
}
//  @desc delete transactions @route api/v1/transactions/:id @access public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({
                suceess: false,
                error: 'No transaction found'
            });
        }
        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}