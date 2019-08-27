const express = require('express')

const app = express()

app.use(express.json()) //允许express处理浏览器提交的json数据

// Product.insertMany([
//     {title: '产品1'},
//     {title: '产品2'},
//     {title: '产品3'}
// ])

const product = require('./router/product')
app.use('/api',product)

// app.delete('/product/:id',async function(req,res) {
//     let theOne = await Product.findById(req.params.id)
//     await theOne.remove()
//     res.send({
//         success: true
//     })
// })


app.listen(8000,()=>{
    console.log('启动成功')
});