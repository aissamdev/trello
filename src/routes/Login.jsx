import { Form } from 'react-router-dom'
import styles from './login.module.css'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Login = ({ correct, setCorrect }) => {
  useEffect(() => {
    setCorrect(true)
  }, [setCorrect])

  return (
    <div className={styles.login}>
      <Form method='post' className={styles['login-form']}>
        <h1 className={styles['login-h1']}>Iniciar Sesión</h1>
        {correct ? null : <span className={styles['login-error']}>Email o contraseña incorrectos</span>}
        <div className={styles['login-email']}>
          <label htmlFor={styles['login-email']}>Email</label>
          <div className={styles['login-input-container']}>
            <input type='email' name='email' id={styles['login-email']} className={styles['login-input']} />
            <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#000' className={styles['email-icon']}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25' />
            </svg>
          </div>
        </div>
        <div className={styles['login-password']}>
          <label htmlFor='login-password'>Password</label>
          <div className={styles['login-input-container']}>
            <input type='password' name='password' id='login-password' className={styles['login-input']} />
            <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#000' className={styles['password-icon']}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z' />
            </svg>
          </div>
        </div>
        <button type='submit' className={styles['login-button']}>Login</button>
        <div className={styles['login-register']}>
          <p>Don't have an account?</p>
          <a href='/register'>Register</a>
        </div>
      </Form>
    </div>
  )
}

export default Login

Login.propTypes = {
  correct: PropTypes.bool,
  setCorrect: PropTypes.func
}
