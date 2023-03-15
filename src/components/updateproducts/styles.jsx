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
      marginTop: 40      
    },





   textMain: {
      color: '#5D3806',
      fontWeight: 'bold',
      fontSize: 24
   },





   textInfo: {
      color: '#452F0C',
      fontWeight: 'bold',
      fontSize: 14,
   },




 
     textAlert: {
      color: '#F4A716',
      fontWeight: 'bold',
      fontSize: 12,
   },




   



   containerData: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      borderRadius:20,
      paddingBottom: 20,  
      marginBottom:60   
   },




   contentDataImg:{
      width:140,
      height:140,
      resizeMode:'contain',
      borderRadius: 50/2 ,
     },

     

  

   input: {
      width: "90%",
      height: 50,
      marginTop: 10,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#45130C",
      marginLeft: 'auto',
      marginRight: 'auto',
      color: "#bdbdbd",
      fontSize: 14,
      fontWeight: 'bold',
   },



   containerBtn: {
      width: 100,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 40,     
      textAlign: 'center',
   },











});