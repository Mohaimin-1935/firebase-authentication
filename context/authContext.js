import React, { useContext, useState, useEffect } from "react"
import { auth } from '../config/firebaseConfig'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  async function signup(email, password) {
    setLoading(true)
    try {
      await auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  async function login(email, password) {
    setLoading(true)
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  async function logout() {
    setLoading(true)
    try {
      auth.signOut()
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }

  function resetPassword(email) {
    // return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    // return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    // return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true)
      setError()
    }
    else {setIsLoggedIn(false)}
  }, [currentUser])

  const value = {
    isLoggedIn,
    loading,
    currentUser,
    login,
    signup,
    logout,
    error,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {/* {!loading && children} */}
      {children}
    </AuthContext.Provider>
  )
}