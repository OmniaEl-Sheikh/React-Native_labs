
import { StyleSheet, Text, View,Image,Button } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
  <View style={styles.first}>
    <Image style={{
          width: 150,
          height: 150,
          borderRadius: 80,
        }}
        source={{
          uri: 'https://img.freepik.com/free-photo/image-professional-woman-doctor-physician-with-clipboard-writing-listening-patient-hospital-cl_1258-87691.jpg?w=2000',
        }}/>

    <Text style={styles.colorP}>Omnia El-Sheikh</Text>
      </View>


      <View style={styles.second} >
    <View style={styles.part}>
    <Text style={styles.head}>Photos</Text>
    <Text style={styles.num}>160</Text>
  </View>
  <View style={styles.part}>
    <Text style={styles.head}>Followers</Text>
    <Text style={styles.num}>2254</Text>
  </View>
  <View style={styles.part}>
    <Text style={styles.head}>Following</Text>
    <Text style={styles.num}>520</Text>
  </View>
</View>



  <View style={styles.third}>
      <View style={styles.line}>
        
        <Text style={styles.right}>Omnia@gmail.com</Text>
      </View>
      <View style={styles.line}>

        <Text style={styles.right}>+222 202 202</Text>
      </View>
      <View style={styles.line}>

        <Text style={styles.right}>Add to Group</Text>
      </View>
      <View style={styles.line}>

        <Text style={styles.right}>Show All Comments</Text>
      </View>
    
  </View>


      <View style={styles.fourth}>
        <Text style={{
          color: '#F6F9FA',
        }}>Follow Me</Text>
      </View>

      
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: "100%",
    backgroundColor: '#ECECEC',
    alignItems: "center",
  },
  first: {

    width: "100%",
    height: "40%",
    backgroundColor: "#29BEDC",
    marginTop: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center"
  },

  colorP: {
    color: '#F6F9FA',
    top:-35,
  },

second: {
  marginHorizontal: 20,
  backgroundColor: '#F6F9FA',
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "center",
  padding: 30,
  borderRadius: 10,
  marginTop: -55,
},
part: {
  display: 'flex',
  justifyContent: "space-evenly",
  alignItems: "center"
},
head: {
  fontSize: 13,
  marginLeft:15,
  color:"#5F5555",
},
num: {
  fontSize: 18,
  color: "#29BEDC",
  marginTop: 10
},

  third:{

    display: 'flex',
    alignItems: "flex-end",
    justifyContent: "center",
     alignContent: "center",
    padding: 10,
    height: "25%",
    width: "100%"
    

  },
  line: {
    margin: 10,
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    width: 250
    
  },
  right: {
    fontSize: 13,
    marginLeft: 10,
    display: 'flex',
    
    
  },
  fourth:{
    backgroundColor: "#29BEDC",
    color:"#fff",
    width:"25%",
    height:"5%",
    borderRadius:20,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-evenly",
    position:"relative",
    top:30,
  },
  
  
});