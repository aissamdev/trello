import styles from './Landing.module.css'
import { Form } from 'react-router-dom'

const Landing = () => {
  return (
    <Form method='post' className={styles.landing}>
      <header className={styles['landing-header']}>
        <div className={styles['landing-logo-container']}>
          <img src='/src/logos/gemif-logo/only-icon/only-icon-white.svg' alt='logo' className={styles['landing-logo']} />
        </div>
        <div className={styles['landing-info']}>
          <h1 className={styles['landing-h1']}>GEMiF</h1>
          <h2 className={styles['landing-h2']}>Un grado donde las matemáticas y la física se unen</h2>
        </div>
      </header>
      <main className={styles['landing-main']}>
        <button type='submit' className={styles['landing-button']}>Entrar</button>
      </main>
    </Form>
  )
}

export default Landing
