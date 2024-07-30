import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import PropTypes from 'prop-types'

const PrivateRoute = ({ component, children, ...rest }) => {
  const { isAuth } = useAuth()

  return (
    isAuth
      ? <>{children}</>
      : <Navigate to='/' />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.node,
  children: PropTypes.node
}

export default PrivateRoute
