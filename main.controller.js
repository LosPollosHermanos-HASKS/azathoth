//Phase 1
//stock,company,user routes
const express = require('express');
const router = express.Router();
const userRouter = require('./user/user.controller');
    
router.use('/user',userRouter);



module.exports = router;
//Phase 2
//schemes

