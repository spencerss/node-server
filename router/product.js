//引入express模块
const express = require("express");
//定义路由级中间件
const router = express.Router();
//引入数据模型模块
const Product = require("../models/product");

// 查询所有英雄信息路由
router.get('/product',async function(req,res) {
    let data = await Product.find();
    res.send(data);
})

module.exports = router;