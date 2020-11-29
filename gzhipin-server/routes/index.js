var express = require('express');
var router = express.Router();
const {UserModel} = require('../db/models')
const md5 = require('blueimp-md5')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/register', function(req, res) {
//   const {username, password} = req.body
//   if (username == 'admin') {

//     res.send({code:1, msg: 'existe'})
//   } else {
//     res.send({code:0, data:{id:'123', username, password}})
//   }
// })

router.post('/register', function(req, res){
  const {username, password, type} = req.body
  UserModel.findOne({username}, function(err, user){
    if (user) {
        res.send({code:1, msg: 'user existe'})
    } else {
        //res.send({code:0})
        new UserModel({username, type, password:md5(password)}).save(function(error, user){
            //res.send({code:0})
            res.cookie('userid', user._id, {maxAge:1000*60*24*60})
            const data = {username, type, _id:user._id}
            res.send({code:0, data})
        })
    }
  })
})
module.exports = router;