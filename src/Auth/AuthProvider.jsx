import React, { createContext, useState } from 'react'


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [getId ,setId] = useState(null);
    const [user,setUser] = useState(null);

    const authProvider = {
        user,
        setId,
        getId,

    }
  return (
   <AuthContext.Provider value={authProvider}>

        {children}
   </AuthContext.Provider>
  )
}

export default AuthProvider