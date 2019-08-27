// 引入数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/table',{useNewUrlParser: true})//table是数据库名称

// 创建数据库模型

const Product = mongoose.model('Product',new mongoose.Schema({ //product是表名
    title: String
}))

module.exports = Product