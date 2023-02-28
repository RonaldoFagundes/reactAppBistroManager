import React, { useContext, useState, useEffect}  from 'react';

import {
     Alert, 
     View, 
     ScrollView, 
     Text,
     TextInput, 
     TouchableOpacity,
     KeyboardAvoidingView,
     Platform 
     } from 'react-native';



import {AuthContext} from '../../contexts/auth';
     
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';







export default function Login({ navigation }){



  const {setUser}  = useContext(AuthContext);
 
  const [errorLogin, setErrorLogin] = useState("");

  const [login , setLogin]  = useState({
    email:'',
    password:'',    
  });
    

        /*
           ronaldofagundes@gmail.com
           12345678
        */
   


       const handleInputChange = (atributo, valor) => {
        setLogin({
            ...login, [atributo]: valor
        })
    }


    

      const logar = async ()=>{        
       
        const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data' ;  
       
        await fetch(`${endpointPhp}/?action=login`,{
          method:'POST',
          headers:{
              'Content-Type': 'application/json'
          },

          body:JSON.stringify({
            login
          })
             
       })        
          .then(res => res.json())
          .then(      
              (result)=>{       
         
            if(result != "email ou senha incorretos!" ){

                 setUser(result)
                 setErrorLogin(false);
                 navigation.navigate("Home");

                  console.log(" email "+login.email+" senha "+login.password+" conectado com sucesso com ususario  "+result);

                 }else{
                                  
                    setLogin({
                        ...login, ["email"]: "" ,
                           login , ["password"]: ""
                      })            

                  setErrorLogin(true);

                  console.log("erro "+login.email+" "+login.password)
                }
           
              
           });
      



       /*    
       await fetch(`${endpointPhp}/?action=login&email=${email}&password=${password}`,{
           method:"POST"
        })

        .then(res => res.json())
        .then(      
            (result)=>{              

            }      
         )
       .catch(() => {
        Alert.alert('Erro', 'Não foi possível carregar os dados da Api');
        });

        */


      }








    return(

     <LinearGradient
       
        colors={
            [
              'rgba(0, 0, 45, 1)',
              'rgba(0, 0, 45, 0.8)'  
            ]
        }     
        style={styles.body}
       >

     <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.body}
      >


       <View>


        <View>
            <Text style={styles.textMain}>Tela de Login</Text>
        </View>

           

          <View>

           <TextInput
             style={styles.input}
             placeholder=" digite seu email"
             placeholderTextColor="#ffffff"
             type="text"
         
           onChangeText={
            (valor) => handleInputChange("email",(valor))            
           }
            value={login.email}
           />

          </View>


          <View>
             <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="digite sua senha"
                placeholderTextColor="#ffffff"
                type="text"              

                onChangeText={
                (valor) => handleInputChange("password",(valor))
                }
                 value={login.password}
               />
          </View>



           {
        
           
           errorLogin === true
            ?
             <View>
               <Text style={styles.textMain}>email ou senha invalidos!</Text>
             </View>
             :
             <View></View>
           }

          
          
           {
            login.email === "" || login.password === "" 

             ?

             <TouchableOpacity 
                style={styles.btnLogin}
                disabled={true}              
               >
                <Text style={styles.textMain}>Login</Text>
             </TouchableOpacity>

            : 
                 
            <View>
              <TouchableOpacity 
                style={styles.btnLogin}
                onPress={logar}>
                <Text style={styles.textMain}>Logar</Text>
              </TouchableOpacity>
          </View>

          }


      <Text style={styles.textInfo}>

          {` não tem cadastro ?  `}

          <Text style={styles.linkSubscribe}
            onPress={()=>navigation.navigate("Insertuser")}
           >
            {` cadastre-se agora... `}
          </Text>

        </Text>

 
        </View>



      <View style={{ height: 100 }}></View>

      </KeyboardAvoidingView>

     </LinearGradient>
    )


 
   
}