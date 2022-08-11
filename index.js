const express = require('express') //express 모듈 가져오기
const app = express()  //express를 이용하는 app 생성
const port = 5000  //아무 숫자 가능
const bodyParser=require('body-parser');

const config=require('./config/key');

const{User}=require("./models/User");

//client에서 오는 정보를 서버에서 분석해서 가져옴
//application/x-www-form-urlcoded 
app.use(bodyParser.urlencoded({extended:true})); 

//application/json
app.use(bodyParser.json());

const mongoose=require('mongoose')
mongoose.connect(config.mongoURI,
{useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err=>console.log(err))




app.get('/', (req, res) => res.send('Hello World! 안녕하세요!!!!!!!!!!!!!!'))


app.post('/register',(req,res)=>{
  //회원가입 할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.

    const user=new User(req.body)
    //정보들이 user에 저장됨
    user.save((err, userInfo)=>{
      if(err) return res.json({success:false, err})
      return res.status(200).json({
        success:true
      })
    })


})

app.listen(port, () => console.log(`Example app listening on port ${port}`))