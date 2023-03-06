import { StyleSheet } from 'react-native';


export default StyleSheet.create({


   body: {
      flex: 1
   },




   containerMain: {
      height: 'auto',
      with: '100%'
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









   containerData: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      height: 'auto',
      paddingBottom: 20,
      backgroundColor: 'green',
   },




   input: {
      width: 300,
      height: 50,
      marginTop: 10,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#F92E6A",
      marginLeft: 'auto',
      marginRight: 'auto',
      color: "#bdbdbd"
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