import React from 'react';

export default function Inputfield({ title, require, setChanges, changes, type }) {
  return (
    <div className='w-50'>
      <label>
        {title}
        {require && <span style={{color:'red'}} >*</span>}
      </label>
      <input required={require} type={type ? type:'text'} className='form-control' onChange={e => setChanges(e.target.value)} value={changes}>
      </input>
    </div>
  );
}
