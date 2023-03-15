import { StyleSheet } from 'react-native';


export default StyleSheet.create({



   body: {
      flex: 1
   },



  

   containerMain: {
      alignItems: 'center',
      justifyContent: 'center',
      height:'auto'  
    },



    containerHeader: {
      height: 180,
      width: '100%',
      flexDirection:'col',
      textAlign: 'center',
      padding:20, 
      marginBottom: 30
   },




    contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between ',
      marginTop:40
      
    },


    

    textMain: {
      color: '#5D3806',
      fontWeight: 'bold',
      fontSize: 24
   },





   textInfo: {
     // color: '#452F0C',
     color: '#4E1313',
      fontWeight: 'bold',
      fontSize: 16,
   },




 
     textAlert: {
      color: '#F4A716',
      fontWeight: 'bold',
      fontSize: 14,
   },



   textDados: {
      color: '#4E1313',
      fontWeight: 'bold',
      fontSize: 13,
   },

   




   containerData: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      borderRadius:20,
      paddingTop:10,
      paddingBottom: 3,  
      marginTop:10 ,
      
   },


  


   containerProducts: {
      width: 'auto',
     // backgroundColor: 'green',
      flexDirection: 'col',
      padding: 10,
      marginBottom: 10 
     // marginTop: 30
   },


  


   contentProducts: {
      width: 'auto',
      backgroundColor: 'orange',
      flexDirection: 'row',
      padding: 10,
      borderRadius:20
   },




   contentProductsImg:{
      width:60,
      height:50,
      resizeMode:'contain',
      backgroundColor: '#C45511',
      borderRadius: 50/2 ,
      marginLeft: 5,     
      },



   contentProductsS: {
      width: 60,
      height: 50,
      backgroundColor: '#C45511',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center',
      justifyContent:'center'
       
   },



   contentProductsM: {
      width: 160,
      height: 50,
      backgroundColor: '#C45511',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center',
      justifyContent:'center'
     
   },



   contentProductsX: {
      width: 220,
      height: 50,
      backgroundColor: '#C45511',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center',
      justifyContent:'center'
     
   },





   containerBtn: {
      width: 100,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      marginRight: 6,
      marginLeft: 6,
      textAlign: 'center',
   },



});