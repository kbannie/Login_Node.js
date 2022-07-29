const express = require('express') //express 모듈 가져오기
const app = express()  //express를 이용하는 app 생성
const port = 5000  //아무 숫자 가능

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://kabeen:kimk2205@boilerplate.kw27srq.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology:true
}).then(()=> console.log('MongoDB Connected...'))
  .catch(err=>console.log(err))




app.get('/', (req, res) => res.send('Hello World! 안녕하세요'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))