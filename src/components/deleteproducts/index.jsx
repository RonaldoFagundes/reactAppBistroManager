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


import { AuthContext } from '../../contexts/auth';
     
import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';





export default function Deleteproducts({ navigation }){


  
  const {user , idProduct } = useContext(AuthContext);

  const [products, setProducts] = useState([]);





 









  useEffect(()=>{ 


    getProducts();

    
    /*
    const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

    fetch(`${endpointPhp}/?action=getproduto&id=${idProduct}`)
          .then(res => res.json())
          .then(
               (result)=>{
                   setProducts(result)
               }
          )   
         .catch(() => {
          Alert.alert('Erro', 'Não foi possível carregar os dados do Produto');
         });
        */

       
    
      },[]);  








      const getProducts = async()=>{
		
        const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data';
        
        await fetch(`${endpointPhp}/?action=getproduto`,{
          method:'POST',
          headers:{
              'Content-Type': 'application/json'
          },
    
           body:JSON.stringify({
            idProduct
          })     
              
       })  
    
       .then(res => res.json())
              .then(
                   (result)=>{
                       setProducts(result)
                   }
              )   		
      }
    
    
    
    
    




    
    
      const deleteProduct = async()=>{
        
        const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data';
        
        await fetch(`${endpointPhp}/?action=deleteproduto`,{
          method:'POST',
          headers:{
              'Content-Type': 'application/json'
          },
    
           body:JSON.stringify({
            idProduct
          })     
              
       })  
    
       .then(res => res.json())
              .then(
                   (result)=>{
                      console.log(result);
                   }
              )   		
      }




      






   return(


   <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "padding" : "height"}
     style={styles.body}
 
   >



    <LinearGradient
       
    colors={
        [
          'rgba(0, 0, 45, 1)',
          'rgba(0, 0, 45, 0.8)'  
        ]
    }     
    style={styles.containerMain}
   >

 



    

        <ScrollView>
  
                    

        <View style={styles.containerHeader}>

              <Text style={styles.textInfo}>{`User :  ${user}`}</Text>
             
              <Text style={styles.textMain}>Tela Delete</Text>


              <View>

                <TouchableOpacity
                 style={styles.btn}                   
                 onPress={() => navigation.navigate("Home")}>
                 <Text >Voltar</Text>
               </TouchableOpacity>

              </View>
            

         </View>



  
                           
  
           <View style={styles.containerData}>            


                   <Text >{` Id :  ${products.id}`}</Text> 

                   <Text style={styles.contentData}>{` Img :     ${products.img}`}</Text> 

                   <Text style={styles.contentData}>{` Nome :    ${products.nome}`}</Text> 

                   <Text style={styles.contentData}>{` Info  :   ${products.info}`}</Text> 

                   <Text style={styles.contentData}>{` Preço :   ${products.preco}`}</Text>  

                
                            
                 

                  <View>

                    <TouchableOpacity
                     style={styles.btn}                   
                     onPress={() => deleteProduct()}>
                     <Text >Deletar</Text>
                   </TouchableOpacity>

                  </View>

           
  
              </View>
  
  
  
        </ScrollView>
  
    
  




      <View style={{ height: 100 }}></View>

   

   </LinearGradient>

  </KeyboardAvoidingView>

  
      );
   }