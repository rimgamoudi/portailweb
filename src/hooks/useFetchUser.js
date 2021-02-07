import { useState, useEffect, useCallback } from 'react'
// import axios from 'axios'
// import setAuthToken from 'helpers/setAuthToken'
// import { BASE_URL } from 'config'

export default (user, dispatch) => {
  const [loading, setLoading] = useState(false)

  // const fetchUser = useCallback(async () => {
  //   try {
  //     const token = window.localStorage.getItem('token')
  //     if (token) {
  //       const { data } = await axios({
  //         method: 'GET',
  //         url: `${BASE_URL}/api/user/verify`,
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: token,
  //         },
  //       })

  //       setAuthToken(token)
  //       await dispatch({ type: 'SAVE_USER', payload: data })

  //       window.localStorage.setItem('token', data.token)
  //       setLoading(false)
  //     } else {
  //       setLoading(false)
  //     }
  //     setLoading(false)
  //   } catch (err) {
  //     // TODO: return error as well
  //     console.log(err)
  //     setLoading(false)
  //   }
  // }, [dispatch])

  // useEffect(() => {
  //   if (!user.isLoggedIn) {
  //     fetchUser()
  //   }
  // }, [user.isLoggedIn, fetchUser])

  return {
    loading,
    isLoggedIn: user?.isLoggedIn || false,
  }
}
