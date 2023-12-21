import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../component/Redux/Action";

const Home = () => {
  const navigation = useNavigation();
  const items = [
    {
      id: "1",
      name: "Jordon",
      qty: 0,
      price: 2000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G8UawdHQEqDnU0uF9uFIbaXGyuW5t-zIGKDxcPY23A_ePb8ukkpadfWtz9B6TswJBx4&usqp=CAU",
    },
    {
      id: "2",
      name: "Nike",
      qty: 0,
      price: 2500,
      class: "two",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G8UawdHQEqDnU0uF9uFIbaXGyuW5t-zIGKDxcPY23A_ePb8ukkpadfWtz9B6TswJBx4&usqp=CAU",
    },
    {
      id: "3",
      name: "Sneaker",
      qty: 0,
      price: 3500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G8UawdHQEqDnU0uF9uFIbaXGyuW5t-zIGKDxcPY23A_ePb8ukkpadfWtz9B6TswJBx4&usqp=CAU",
    },
  ];

  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.reducer);

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  let addedItems = [];
  addedItems = cartData;

  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#2196F3",
            borderRadius: 20,
            width: 40,
            height: 50,
          }}
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              padding: 10,
              color: "black",
            }}
          >
            {addedItems.length}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 15,
            width: 200,
            height: 50,
            padding: 10,
          }}
          onPress={() => {
            navigation.navigate("User");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "blue",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Go to UserList
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 20,
              width: 350,
              marginTop: 30,
              height: 120,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
                margin: 10,
                borderRadius: 20,
              }}
              source={{ uri: item.image }}
            />
            <View
              style={{
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontStyle: "italic",
                  fontWeight: "600",
                }}
              >
                Name:{item.name.substring(0, 20)}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: "green",
                }}
              >
                Price: {item.price}RS
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    backgroundColor: "orange",
                    height: 55,
                    width: 55,
                    alignItems: "center",
                  }}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      margin: 5,
                      padding: 4,
                      color: "white",
                    }}
                  >
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View></View>
          </View>
        )}
      />
    </View>
  );
};

export default Home;
