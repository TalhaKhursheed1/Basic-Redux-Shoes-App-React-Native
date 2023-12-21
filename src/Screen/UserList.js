import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { getUserList } from "../../component/Redux/Action";


const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer);
  const isLoading = userList.length === 0;

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  console.warn('Hello',userList);

  if (isLoading) {
    return <Text>Loading...</Text>; // Display a loading message
  }
  return (
    <View style={{
      flex:1,
    }}>
     <Text style={{
      color:'black',
      fontSize:30,
     }}>
  </Text>

 {userList.length > 0 ? (
  <FlatList
    data={userList[0].users} // Accessing the object of an array 
    renderItem={({ item }) => (
      <View>
        <Text>Name: {item.firstName}</Text>
        
        <Text>ID: {item.id}</Text>
      </View>
    )}

  />
) : (
  <Text>No data available</Text>
)}
  


    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({});
