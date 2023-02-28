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





export default function Updateproducts({ navigation }){



  
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




      


   return(

     <View >

        <ScrollView>
  
            
           <Text >Tela Update</Text>


             <Text >{`user ${user}`}</Text>


             <Text >{`id produto ${idProduct}`}</Text>
  
  
                           
  
             <View>                 


                   <Text>{products.id}</Text> 

                   <Text>{products.nome}</Text> 

                   <Text>{products.info}</Text> 

                   <Text>{products.preco}</Text>  

                {/* 
                
                
                {            
                
                products.map(
  
                  (produto) => 
  
                  <View style={styles.containerProducts} key={produto.id}>
                                     
                    <Text style={styles.contentProductsS}>{produto.id}</Text> 
                    <Text style={styles.contentProductsM}>{produto.nome}</Text> 
                    <Text style={styles.contentProductsX}>{produto.info}</Text>
                    <Text style={styles.contentProductsS}>{`R$ ${produto.preco},00`}</Text>
                                
                    
                  </View>
  
                    
  
                )     
              
              } 
              
              */}
              
              
            </View>        
  
  
  
  


           <View>
    
            
                 
             
                
          
               
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