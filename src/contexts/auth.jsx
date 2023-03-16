import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});


function AuthProvider({children}){



    const [user,setUser] = useState ({}); 

    const [idProduct, setIdProduct] = useState (""); 



   /* 
    localhost 
    const endpointPhp = 'http://127.0.0.1:4000/_github/php_api_bistro_data'; 
   */

   /* replit */
   const endpointPhp = 'https://phpapibistrodata.ronaldofagundes.repl.co'; 

   
   

     return(
        <AuthContext.Provider value={ {
                setUser , user ,
                setIdProduct , idProduct,
                endpointPhp
              } }>
                    
           {children}
        </AuthContext.Provider>
     )

}

export default AuthProvider;