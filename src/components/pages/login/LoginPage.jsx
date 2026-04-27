import React, { useContext } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import FormLogin from '../../forms/FormLogin'
import { AuthContext } from '../../../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function LoginPage() {
   const { user } = useContext(AuthContext)

  if(user) {
    return <Navigate to={'/home'} replace/>
  }
  return (
    <div>
<FormLogin/>
    </div>
  )
}
