import {StyleSheet} from 'react-native';



export default StyleSheet.create(
    {
       body:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
       },


       textMain:{
         color:'yellow',
         fontSize: 18
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



       textInfo:{
        marginTop: 20,
        color: '#bdbdbd'
       },

       linkSubscribe: {
        color: '#1877f2',
        fontSize: 16
      },

       textAlert:{},
      

       btnLogin: {
        width: 200,
        height: 50,
        backgroundColor: '#F92E6A',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 30
      },

      
    }
);