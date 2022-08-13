import Axios  from 'axios';
//import { response } from 'express';  진짜 갑자기 28errors가 떠서 망했다 싶었는데 이거 주석처리 하니 싹 해결
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {
  const dispatch=useDispatch();
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const onEmailHandler=(event)=>{
    setEmail(event.currentTarget.value)
  }

  const onPasswordHandler=(event)=>{
    setPassword(event.currentTarget.value)
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();  //login 버튼을 누를 때 마다 리프레쉬되지 않게 해주는 역할


    let body={
      email:Email,
      password:Password
    }


    dispatch(loginUser(body))
      .then(response=>{
        if(response.payload.loginSuccess){
          props.history.push('/')
        }else{
          alert('Error')
        }
      })
    
  }

  return (
    <div style={{
      display:'flex', justifyContent:'center',alignItems:'center',
      width:'100%',height:'100vh'
    }}>
    
      <form style={{display:'flex', flexDirection:'column'}}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler}/>
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler}/>

        <br />
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  )
}


export default withRouter(LoginPage)