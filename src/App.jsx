import React, { Suspense, useState } from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, redirect } from 'react-router-dom'
import { useAuth } from './hooks/useAuth.js'
import Layout from './routes/Layout.jsx'
import PrivateRoute from './components/Routes/PrivateRoute.jsx'
import PublicRoute from './components/Routes/PublicRoute.jsx'

const Login = React.lazy(() => import('./routes/Login.jsx'))
const Register = React.lazy(() => import('./routes/Register.jsx'))
const Home = React.lazy(() => import('./routes/gemif/Home.jsx'))
const Landing = React.lazy(() => import('./routes/Landing.jsx'))
const Trello = React.lazy(() => import('./routes/gemif/Trello.jsx'))

const App = () => {
  const { loginUser, registerUser, isAuth } = useAuth()
  const [correct, setCorrect] = useState(true)

  const formToJSON = ({ formData }) => {
    const result = {}
    for (const [key, value] of [...formData.entries()]) {
      result[key] = value
    }
    return result
  }

  const registerAction = async ({ request }) => {
    const formData = await request.formData()
    const data = formToJSON({ formData })
    await registerUser({ data })
    return redirect('/login')
  }

  const loginAction = async ({ request }) => {
    const formData = await request.formData()
    const data = formToJSON({ formData })
    await loginUser({ data })
    if (isAuth) return redirect('/gemif/inicio')
    setCorrect(false)
    return redirect('/login')
  }

  const landingAction = () => {
    return redirect('/login')
  }

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route key='landing' index element={<Suspense fallback={<p>Loading...</p>}><Landing /></Suspense>} action={landingAction} />,
      <Route key='register' path='/register' element={<Suspense fallback={<p>Loading...</p>}><PublicRoute><Register /></PublicRoute></Suspense>} action={registerAction} />,
      <Route key='login' path='/login' element={<Suspense fallback={<p>Loading...</p>}><PublicRoute><Login correct={correct} setCorrect={setCorrect} /></PublicRoute></Suspense>} action={loginAction} />,
      <Route key='layout' element={<Suspense fallback={<p>Loading...</p>}><PrivateRoute><Layout /></PrivateRoute></Suspense>}>
        <Route key='home' path='/gemif/inicio' element={<Suspense fallback={<p>Loading...</p>}><PrivateRoute><Home /></PrivateRoute></Suspense>} />,
        <Route key='agenda' path='/gemif/agenda' element={<Suspense fallback={<p>Loading...</p>}><PrivateRoute><Trello /></PrivateRoute></Suspense>} />
      </Route>
    ])
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
