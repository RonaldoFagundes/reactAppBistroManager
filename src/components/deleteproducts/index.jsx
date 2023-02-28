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

//import { LinearGradient } from 'expo-linear-gradient';





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

     <View >

        <ScrollView>
  
            
           <Text >Tela Delete</Text>


             <Text >{`user ${user}`}</Text>
  
  
                           
  
             <View>                 


                   <Text>{products.id}</Text> 

                   <Text>{products.nome}</Text> 

                   <Text>{products.info}</Text> 

                   <Text>{products.preco}</Text>  

                
              
              
            </View>        
  
  
  
  


           <View>
    
            
                 
               <Text style={styles.contentProductsS}

                  onPress={() => deleteProduct()}
                >
                  Deletar
                
                </Text>
                
          
               
                <Text style={styles.contentProductsS}

                  onPress={() => navigation.navigate("Home")}
                >
                  Voltar
                
                </Text>
             
   
  
            </View>
  
  
       


  
  
  
        </ScrollView>
  
      </View>
  
  
      );
   }