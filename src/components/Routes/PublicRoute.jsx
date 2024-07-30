import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import PropTypes from 'prop-types'

const PublicRoute = ({ component, children, ...rest }) => {
  const { isAuth } = useAuth()

  return (
    !isAuth
      ? <>{children}</>
      : <Navigate to='/gemif/inicio' />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.node,
  children: PropTypes.node
}

export default PublicRoute
