require('blueimp-md5')

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/gzhipin_test')

const conn = mongoose.connection

conn.on('connected', function() {

    console.log('connexion reussi')
})

const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型 : dashen/laoban
    header : { type : String}
})

const UserModel = mongoose.model('user', userSchema)

function testSave(){
    const userModel = new UserModel({
        username: "yu",
        password: "123456",
        type: "1",
    })
    userModel.save(function(error, user) {
        console.log('save ', error, user)
    })
}

testSave()