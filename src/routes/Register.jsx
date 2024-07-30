import { Form } from 'react-router-dom'
import styles from './register.module.css'

const Register = () => {
  return (
    <div className={styles.register}>
      <Form method='post' className={styles.form}>
        <h1 className={styles.h1}>Register</h1>
        <div className={styles.name}>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' className={styles.input} />
        </div>
        <div className={styles.year}>
          <label htmlFor='year'>Year</label>
          <input type='number' name='year' id={styles.year} className={styles.input} />
        </div>
        <div className={styles.email}>
          <label htmlFor='email'>Email</label>
          <div className={styles['input-container']}>
            <input type='email' name='email' id={styles.email} className={styles.input} />
            <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#000' className={styles['email-icon']}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25' />
            </svg>
          </div>
        </div>
        <div className={styles.password}>
          <label htmlFor='password'>Password</label>
          <div className={styles['input-container']}>
            <input type='password' name='password' id={styles.password} className={styles.input} />
            <svg xmlns='http://www.w3.org/2000/svg' fill='#fff' viewBox='0 0 24 24' strokeWidth={1.5} stroke='#000' className={styles['password-icon']}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z' />
            </svg>
          </div>
        </div>
        <button type='submit' className={styles.button}>Register</button>
        <div className={styles.login}>
          <p>Already have an account?</p>
          <a href='/login'>Login</a>
        </div>
      </Form>
    </div>
  )
}

export default Register
