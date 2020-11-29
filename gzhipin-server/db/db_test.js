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

function testFind(){

    UserModel.find({_id:'5fc3c5dc567608f172f8d047'}, function(error, users){
        console.log(users)
    })

    UserModel.findOne({_id:'5fc3c5dc567608f172f8d047'}, function(error, user){
        console.log(user)
    })
}

testFind()

function testUpdate() {
    UserModel.findByIdAndUpdate({_id:'5fc3c5dc567608f172f8d047'}, {username:'Jing'}, function(error, doc){
        console.log('fincbyidandupdate', error, doc)
    })
}

testUpdate()

function testDelete(){

    UserModel.remove({_id:'5fc3c5dc567608f172f8d047'}, function(error, doc) {
        console.log('delete', error, doc)
    })
}

testDelete()