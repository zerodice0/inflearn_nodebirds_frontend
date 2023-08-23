import React, { useState, useCallback } from 'react';
import AppLayout from '../components/AppLayout';
import { Button, Checkbox, Form, Input } from 'antd';

const SignUp = () => {
  const useInputController = useCallback((initValue) => {
    const [value, setter] = useState(initValue);
    const handler = (event) => {
      setter(event.target.value);
    }
    return [value, handler];
  });

  const useErrorCheckController = useCallback((initValue, validator) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((event) => {
      validator(event.target.value);
      setter(event.target.value);
    }, [value]);

    return [value, handler];
  })

  // const [userId, setUserId] = useState("");
  // const [nickname, setNickname] = useState("");
  const [userId, onChangeUserId] = useInputController("");
  const [nickname, onChangeNickname] = useInputController("");
  const [password, onChangePassword] = useInputController("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPassword, onChangePasswordConfirm] = useErrorCheckController(
    "", 
    (value) => setPasswordError(value != password)
    );
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);


  const onSubmit = useCallback(() => {
    console.log({
      userId, password, confirmPassword, nickname, term
    })
    if (password !== confirmPassword) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }
  }, [password, confirmPassword, term]);
  // const onChangeUserId = (event) => {
  //   console.log(event.target.value);
  //   setUserId(event.target.value);
  // };
  // const onChangeNickname = (event) => {
  //   setNickname(event.target.value);
  // };
  // const onChangePassword = (event) => {
  //   setPassword(event.target.value);
  // };
  // const onChangePasswordConfirm = (event) => {
  //   setPasswordError(event.target.value !== password);
  //   setConfirmPassword(event.target.value);
  // };
  const onChangeTerm = useCallback((event) => {
    setTermError(!event.target.checked);
    setTerm(event.target.checked);
  }, [term]);

  return (
    <Form onFinish={onSubmit} style={{padding:20}}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br/>
        <Input name="user-id" value={userId} required onChange={onChangeUserId}/>
      </div>
      <div>
        <label htmlFor="nickname">Nickname</label>
        <br/>
        <Input name="nickname" value={nickname} required onChange={onChangeNickname}/>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <br/>
        <Input name="password" type="password" value={password} required onChange={onChangePassword}/>
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Passsword</label>
        <br/>
        <Input name="confirm-password" type="password" value={confirmPassword} required onChange={onChangePasswordConfirm}/>
        {passwordError && <div style={{color:"red"}}>Password is not correct</div>}
      </div>
      <div style={{paddingTop: 10, paddingBottom: 10}}>
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
          Agree to term
        </Checkbox>
        {termError && <div style={{color:"red"}}>Please agree to term.</div>}
      </div>
      <div style={{marginTop:10}}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  )
};

export default SignUp;