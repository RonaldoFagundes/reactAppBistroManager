import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});


function AuthProvider({children}){



    const [user,setUser] = useState ({}); 

    const [idProduct, setIdProduct] = useState (""); 




     return(
        <AuthContext.Provider value={ {
                setUser , user ,
                setIdProduct , idProduct
              } }>
                    
           {children}
        </AuthContext.Provider>
     )

}

export default AuthProvider;