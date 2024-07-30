import styles from './Header.module.css'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()

  const sections = ['Agenda', 'Asignaturas', 'Info']

  const classNames = sections.map(item => {
    if (pathname.includes(item.toLowerCase())) {
      return styles['selected-item']
    }
    return styles['unselected-item']
  })

  return (
    <header className={styles.header}>
      <img src='/src/logos/gemif-logo/only-name/only-name-no-background.svg' alt='logo' className={styles.logo} />
      <ul>
        {
          sections.map((section, index) => <li key={section.toLowerCase()} className={classNames[index]}><Link to={'/gemif/' + section.toLowerCase()}>{section}</Link></li>)
        }
      </ul>
    </header>
  )
}

export default Header
