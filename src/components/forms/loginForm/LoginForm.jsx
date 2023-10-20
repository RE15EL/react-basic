import { useState } from "react";

export function LoginForm() {
  const [form, setForm] = useState(
    {
      email: '',
      password: ''
    }
  );

  const handleChange = (event) => {
    setForm(
      {
        ...form,
        [event.target.name]: event.target.value 
      });
  };  

  return (
    <form 
      onSubmit={ (event) => {
        event.preventDefault();
        alert(`${form.email} - ${form.password}`);
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" value={form.email} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" value={form.password} onChange={handleChange}/>
      </div>
      <button type="submit" >Submit</button>
    </form>
  )
}
