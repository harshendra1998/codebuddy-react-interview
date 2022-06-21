import React,{useState} from 'react'
import Inputfield from '../components/inputfield'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { fetch } from 'whatwg-fetch';

export default function Thirdform() {
    const navigate = useNavigate();
    const [countrycoad, setcountrycoad] = useState('')
    const [phone, setphone] = useState('')
    const [address, setaddress] = useState('')
    const savenext = () => {
        dispatch({typr: 'STOREDATA', payload: {
            firstname: firstname,
            lastname: lastname ,
            address: address}});
    }

    const onsubmit=()=> fetch('https://codebuddy.review/submit', {method:'POST', body: data})

  return (
    <div className='container flex'><p className='text-center fs-3'><Button variant="danger" onClick={()=>navigate('/second')}>Back</Button>Third Form</p>
    <select className='form-select w-50' setChanges={(e)=>setcountrycoad(e.target.value)} changes={countrycoad} >
        <option value='+91'>India (+91)</option>
        <option value='+1'>Australia (+1)</option>
    </select>
    <Inputfield title='Phone Number' type={'number'} require={true} setChanges={setphone} changes={phone} ></Inputfield>
    <input typr='checkbox'></input>
    <Button variant="primary" onClick={()=> onsubmit()}>Save</Button>
    </div>
  )
}
