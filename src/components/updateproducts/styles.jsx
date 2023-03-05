import {StyleSheet} from 'react-native';


export default StyleSheet.create({

   
   body:{
      flex:1     
     },




     containerMain:{
      height:'auto',
      with:'100%'
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

   




   textMain:{
      color:'yellow',
      fontSize: 18
     },


     textInfo:{
      marginTop: 20,
      color: 'white'
     },
  
  
  









     containerData:{
       
        alignItems: 'center',
        justifyContent: 'center',

        width:'auto',
        height:'auto',
        paddingBottom:20,
        

        backgroundColor:'green',
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




  
   btn:{
      backgroundColor:'#F92E6A',
      height:40,
      width:100,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,
    }
 

   







});