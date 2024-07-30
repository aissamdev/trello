import { useState, createContext } from 'react'
import PropTypes from 'prop-types'
import { register } from '../actions/user/register'
import { login } from '../actions/user/login'
import { getInfo } from '../actions/user/getInfo'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const getUserInfo = async () => {
    const info = await getInfo()
    return {
      name: info.data.attributes.name,
      year: info.data.attributes.year,
      email: info.data.attributes.email
    }
  }

  const [isAuth, setIsAuth] = useState(sessionStorage.getItem('token'))
  const [user, setUser] = useState(() => {
    if (isAuth) {
      return getUserInfo()
    }
    return null
  })

  const loginUser = async ({ data }) => {
    const user = await login({ data })

    if (!user.error) {
      setIsAuth(true)
    }
  }

  const registerUser = async ({ data }) => {
    const payload = {
      data: {
        type: 'user',
        attributes: {
          name: data.name,
          year: data.year,
          email: data.email,
          password: data.password
        }
      }
    }
    await register({ data: payload })
  }

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser, registerUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

AuthProvider.propTypes = {
  children: PropTypes.node
}
