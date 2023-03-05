import {StyleSheet} from 'react-native';


export default StyleSheet.create({



   body:{
      flex:1     
     },




     containerMain:{
      height:'auto',
      with:'100%',
      alignItems: 'center',
      justifyContent: 'center',
     },



     
     textMain:{
      color:'yellow',
      fontSize: 18
     },


     textInfo:{
      marginTop: 20,
      color: 'white'
     },



   containerHeader:{
      height:'auto',  
      width:'auto',
      
      backgroundColor:'orange',
      flexDirection: 'row',
      justifyContent:'space-between ', 

      paddingLeft:10,
      paddingTop:20,

      marginTop:10,
      marginBottom:10
   },
   


     
   containerProducts:{
      width:800,

      backgroundColor:'green',

      flexDirection: 'col',  

      padding:10
   },



   contentProducts:{
      width:'auto',
      backgroundColor:'orange',
      flexDirection: 'row',     
      padding:10
   },
   








   contentProductsS:{
      width:60,     
      backgroundColor:'black',
      color:'yellow',
      marginLeft:5,
      textAlign:'center'
   },






   contentProductsM:{
      width:160,     
      backgroundColor:'black',
      color:'yellow',
      marginLeft:5,
      textAlign:'center'
   },




   contentProductsX:{
      width:240,     
      backgroundColor:'black',
      color:'yellow',
      marginLeft:5,
      textAlign:'center'
   },

  


   btn:{
     backgroundColor:'#F92E6A',
     height:40,
     width:100,
     borderRadius:10,
     justifyContent:'center',
     alignItems:'center',
     marginBottom:10,
     marginRight:5,
     marginLeft:5
   }





});