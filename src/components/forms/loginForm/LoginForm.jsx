import './LoginForm.css';
import { useState } from "react";

const INITIAL_STATE = {
  email: '',
  password: '',
  rememberMe: false
};

export function LoginForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChange = (event) => {
    setForm(
      {
        ...form,
        [event.target.name]: event.target.value 
      });
  }; 
  
  const handleCheck = ()=>{
    setChecked(!checked);
  }

  return (
    <div className='form-container'>
      <h2>Login</h2>
      <form className='form'
        onSubmit={ (event) => {
          event.preventDefault();
          alert(`${form.email} - ${form.password} - ${checked} - ${value}`);
          setForm(INITIAL_STATE);
        }}
      >
        <div className='form-field'>
          <label className='text' htmlFor="email">Email</label>
          <input className='form-control ' id="email" name="email" type="text" value={form.email} onChange={handleChange}/>
        </div>

        <div className='form-field'>
          <label className='text' htmlFor="password">Password</label>
          <input className='form-control ' id="password" name="password" type="password" value={form.password} onChange={handleChange}/>
        </div>
        
        <div className="form-field field-check">
          <label>
            <input 
              type="checkbox"
              name="rememberMe"
              checked={checked}
              onChange={handleCheck}
            />
            <span className='text'> Remember me </span>
            
          </label>
        </div>

        <div className="form-field radio-group">
          <label>
            <input type="radio" value="cat" onChange={handleChangeValue} name="radios"/>
            <span className='text'> Cat </span>
          </label>
          <label>
            <input type="radio" value="dog" onChange={handleChangeValue} name="radios"/>
            <span className='text'> Dog </span>
          </label>
        </div>
        
        <button className='btn-action form-control' type="submit" >Submit</button>
      </form>
    </div>
  )
}
