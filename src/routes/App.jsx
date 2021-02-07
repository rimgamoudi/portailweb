import React, { Suspense, lazy } from 'react'
import Theme from 'theme/global'
import useFetchUser from 'hooks/useFetchUser'
import UserProvider, { useUser, useDispatchUser } from 'providers/UserProvider'

const Authenticated = lazy(() => import('./Authenticated'))
const Unauthenticated = lazy(() => import('./Unauthenticated'))

const App = () => {
  const { state } = useUser()
  const { dispatch } = useDispatchUser()
  const { loading, isLoggedIn } = useFetchUser(state, dispatch)

  return (
    <>
      {loading ? (
        <h4>loading...</h4>
      ) : isLoggedIn ? (
        <Suspense fallback={<h4>loading...</h4>}>
          <Authenticated isLoggedIn={isLoggedIn} dispatch={dispatch} />
        </Suspense>
      ) : (
        <Suspense fallback={<h4>loading...</h4>}>
          <Unauthenticated />
        </Suspense>
      )}
    </>
  )
}
export default () => (
  <UserProvider>
    <Theme />
    <App />
  </UserProvider>
)
