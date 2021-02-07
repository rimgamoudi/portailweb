import React, { createContext, useReducer, useContext } from 'react'
import UserReducer from 'reducers/UserReducer'

const UserContext = createContext()
const UserDispatchContext = createContext()

export default ({ children }) => {
  const [userState, dispatch] = useReducer(UserReducer, {})

  return (
    <UserDispatchContext.Provider
      value={{
        userState,
      }}
    >
      <UserContext.Provider
        value={{
          dispatch,
        }}
      >
        {children}
      </UserContext.Provider>
    </UserDispatchContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
export const useDispatchUser = () => useContext(UserDispatchContext)
