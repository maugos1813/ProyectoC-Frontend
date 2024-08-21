import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Login = () => {
  const { loginMutation } = useContext(AuthContext)

  const handleLogin = async e => {
    e.preventDefault()
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    await loginMutation.mutateAsync(data)
  }
  return (
    <div className='w-[800px] absolute left-0 right-0 mx-auto mt-[10%] '>
        <form onSubmit={handleLogin} className='flex flex-col gap-8 items-center h-[500px] justify-center rounded-3xl border border-black '>
            <h1>LOGIN</h1>
            <label htmlFor="username">
                Email: 
                <input type="text" name='email' placeholder='email' className='border w-[318px] h-[48px] rounded-xl px-6' />
            </label>
            <label htmlFor="password">
                Password:
                <input type="text" name="password" placeholder='password' className='border w-[318px] h-[48px] rounded-xl px-6'/>
            </label>
            <button type='submit' className='bg-blue-400 w-[318px] h-[48px] rounded-md'>Enviar</button>
        </form>
    </div>
  )
}
