import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, login, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
       await login(email, password);
        //console.log(email, password);
    }

  return (
    <form className='login' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>Email:</label>
        <input type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} />
        <button disabled={isLoading}>Login</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login