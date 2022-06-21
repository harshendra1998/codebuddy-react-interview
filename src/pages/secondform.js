import React,{useState} from 'react'
import Inputfield from '../components/inputfield'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Secondform() {
    const navigate = useNavigate();
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [myaddress, setaddress] = useState('')
    const savenext = () => {
        // dispatch({typr: 'STOREDATA', payload: {
        //     emailid: emailid,
        //     password: password }});
        navigate('./third');
    }

  return (
    <div className='container flex'><p className='text-center fs-3'><Button variant="danger" onClick={()=>navigate('/first')}>Back</Button>Second Form</p>
    <Inputfield title='First Name' require={true} setChanges={setfirstname} changes={firstname} ></Inputfield>
    <Inputfield title='Last Name' require={true} setChanges={setlastname} changes={lastname} ></Inputfield>
    <Inputfield title='Address' require={true} setChanges={myaddress} changes={setaddress} ></Inputfield>
    <Button variant="primary" onClick={()=> savenext()}>Save and Next</Button>
    </div>
  )
}
