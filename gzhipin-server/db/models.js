const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/gzhipin')

const conn = mongoose.connection

conn.on('connected', function() {

    console.log('connexion reussi')
})

const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型 : dashen/laoban
    header: {type: String}, // 头像名称
    post: {type: String}, // 职位
    info: {type: String}, // 个人或职位简介
    company: {type: String}, // 公司名称
    salary: {type: String} // 工资
    })

const UserModel = mongoose.model('user', userSchema)
exports.UserModel = UserModel