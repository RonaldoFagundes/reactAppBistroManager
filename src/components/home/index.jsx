


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





export default function Home({ navigation }){




  const [products, setProducts] = useState([]);

  const {user , setIdProduct } = useContext(AuthContext);


  const [id,setId] = useState("");





   





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



  

    const updateProduct =()=>{       
   
     setId("");
     setIdProduct(id);

     navigation.navigate("Updateproducts");     
     console.log(id)
    }








    const deleteProduct =()=>{       
    
       setId("");
       setIdProduct(id);
  
       navigation.navigate("Deleteproducts");       
       console.log(id)  
      }




  
    return(
      

    <View >

      <ScrollView>

          
         <Text >Tela Home OK</Text>


            <Text>{user}</Text>
             

            <TouchableOpacity
               style={styles.btn}            

              onPress={() =>
                navigation.navigate("Insertproducts")  }
             >
              <Text >Adcionar</Text>
            </TouchableOpacity>

            <View>                 
                                  
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
            
            
          </View>        




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


     



      </ScrollView>

    </View>


    );
 }





 

  







