const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/EmployeeManagementSystem");
console.log("连接数据库")

//创建模型
const schema = { 
    name: String,
    age:Number  
}
const worker = mongoose.model('worker', schema);
const Worker = new worker({name :'谢小狗',age :21});
Worker.save().then(() => console.log('数据添加成功'))