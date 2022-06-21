import React,{useState} from 'react'
import Inputfield from '../components/inputfield'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Firstform() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emailid, setemailid] = useState('')
    const [password, setPassword] = useState('')

    const savenext = () => {
        dispatch({typr: 'STOREDATA', payload: {
            emailid: emailid,
            password: password }});
        navigate('./second');
    }


  return (
    <div className='container flex'><p className='text-center fs-3'><Button variant="danger" onClick={()=>navigate('/')}>Back</Button>First Form</p>
    <Inputfield title='Emailid' require={true} setChanges={setemailid} changes={emailid} ></Inputfield>
    <Inputfield title='Password' require={true} type={'password'} setChanges={setPassword} changes={password} ></Inputfield>
    <Button variant="primary" onClick={()=>savenext()} >Save and Next</Button>
    </div>
  )
}
