import { StyleSheet } from 'react-native';


export default StyleSheet.create({



   body: {
      flex: 1
   },




   containerMain: {
      height: 'auto',
      with: '100%',
      alignItems: 'center',
      justifyContent: 'center',
   },



   textMain: {
      color: '#5D3806',
      fontWeight: 'bold',
      fontSize: 22
   },


   textInfo: {
      color: '#F4A716',
      fontWeight: 'bold',
      fontSize: 12,
   },




   textAlert: {
      color: '#DAD27D',
      fontSize: 14
   },


   containerHeader: {
      height: 'auto',
      width: 'auto',
      flexDirection:'col',
      textAlign: 'center',
      padding:20,    
      marginBottom: 10
   },


   contentHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between ',
      marginTop:20
    },




   containerProducts: {
      width: 800,
      backgroundColor: 'green',
      flexDirection: 'col',
      padding: 10,
      marginTop: 30
   },


   contentProducts: {
      width: 'auto',
      backgroundColor: 'orange',
      flexDirection: 'row',
      padding: 10
   },


   contentProductsS: {
      width: 60,
      backgroundColor: 'black',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center'
   },


   contentProductsM: {
      width: 160,
      backgroundColor: 'black',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center'
   },


   contentProductsX: {
      width: 240,
      backgroundColor: 'black',
      color: 'yellow',
      marginLeft: 5,
      textAlign: 'center'
   },


   containerBtn: {
      width: 100,
      height: 40,
      justifyContent: 'center',
      borderRadius: 10,
      marginRight: 10,
      marginLeft: 10,
      textAlign: 'center',
   },



});