


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





export default function Home({ navigation }){




  const [products, setProducts] = useState([]);

  const {user , setIdProduct } = useContext(AuthContext);


 // const [id,setId] = useState("");





   





  useEffect(()=>{ 

     getProducts();



// const endpointNode =  'http://192.168.236.217:3000/tb_usuarios';
   
// const endpointPhp  =  'https://phpdatabaseapi.ronaldofagundes.repl.co/';
   
// const endpointPhp  =  'http://127.0.0.1:4000/_github/php_api_bistro_data/listProducts.php';

// const endpointPhp  =  'http://192.168.21.204:4000/_github/php_api_bistro_data/listProducts.php';

// const endpointPhp  =  'http://127.0.0.1:4000/_github/php_api_bistro_data/listProducts.php';




/*
const endpointPhp  = 'http://127.0.0.1:4000/_github/php_api_bistro_data';

fetch(`${endpointPhp}/?action=listprodutos`)
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
		
		 await fetch(`${endpointPhp}/?action=listprodutos`)
           .then(res => res.json())
           .then(
               (result)=>{
                  setProducts(result)
               }
           )      
          .catch(() => {
            Alert.alert('Erro', 'Não foi possível carregar os dados do Produto');
          });
		
		
	}


     



  

    const updateProduct =(value)=>{       
   
     //setId("");
     setIdProduct(value);

     navigation.navigate("Updateproducts");     
     console.log(value)
    }








    const deleteProduct =(value)=>{       
    
      // setId("");
       setIdProduct(value);
  
       navigation.navigate("Deleteproducts");       
       console.log(value)  
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
      >



      <ScrollView>
        

       <View style={styles.containerHeader}>

          <Text style={styles.textInfo}>{`Bem vindo(a)! ${user}`}</Text>
             
          <Text style={styles.textMain}>Tela Home</Text>


            <TouchableOpacity
               style={styles.btn}         
               onPress={() =>
                navigation.navigate("Login")  }
              >
              <Text >Logout</Text>
            </TouchableOpacity>

            

       </View>




         <View  style={styles.containerMain}>



            <TouchableOpacity
               style={styles.btn}         
               onPress={() =>
                navigation.navigate("Insertproducts")  }
              >
              <Text >Adcionar</Text>
            </TouchableOpacity>





           





           <View style={styles.containerProducts}>                 


             <View  style={styles.contentProducts}> 

              <Text style={styles.contentProductsS}>id</Text> 
              <Text style={styles.contentProductsM}>nome</Text> 
              <Text style={styles.contentProductsM}>info</Text>
              <Text style={styles.contentProductsS}>preco</Text>
              <Text style={styles.contentProductsM}>Açoes</Text>

             </View> 


              {            
              
              products.map(

                (produto) => 

                <View  style={styles.contentProducts} key={produto.id}>
                                   
                  <Text style={styles.contentProductsS}>{produto.id}</Text> 
                  <Text style={styles.contentProductsM}>{produto.nome}</Text> 
                  <Text style={styles.contentProductsM}>{produto.info}</Text>
                  <Text style={styles.contentProductsS}>{`R$ ${produto.preco},00`}</Text>



                  <View>
                    <TouchableOpacity   
                     style={styles.btn}            
                     onPress={() => updateProduct(produto.id)}>
                     <Text >Update</Text>
                   </TouchableOpacity>
                  </View>




                  <View>
                    <TouchableOpacity
                     style={styles.btn}                   
                     onPress={() => deleteProduct(produto.id)}>
                     <Text >Delete</Text>
                   </TouchableOpacity>
                  </View>



                </View>

                  

              )     
            
            }
            
            

          </View>        



         </View>


          {/* 
          
          <View>


          <TextInput
           style={styles.input}
       
          placeholder=" valor do id" placeholderTextColor="black"
          type="text"
          onChangeText={(valor) => setId(valor)}  
          value={id}       
         />


            <TouchableOpacity
               style={styles.btn}
               onPress={updateProduct}
             >
              <Text>Atualizar</Text>
            </TouchableOpacity>



            <TouchableOpacity
               style={styles.btn}
               onPress={deleteProduct}
             >
              <Text >Excluir</Text>
            </TouchableOpacity>




          </View> 
          
          */}


     



      </ScrollView>



   



    <View style={{ height: 100 }}></View>

   

     </LinearGradient>

  </KeyboardAvoidingView>


    );
 }





 

  







