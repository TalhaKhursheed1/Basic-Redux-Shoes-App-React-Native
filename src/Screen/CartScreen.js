import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { removeFromCart } from "../../component/Redux/Action";

const CartScreen = () => {
  const navigation = useNavigation();

  const list = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromCart(index));
  };

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
          alignItems: "flex-start",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        renderItem={({ item, index }) => (
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
                    backgroundColor: "red",
                    height: 35,
                    width: 65,
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                  onPress={() => handleRemoveFromCart(index)}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      margin: 5,
                      padding: 4,
                      color: "white",
                    }}
                  >
                    Remove
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

export default CartScreen;

const styles = StyleSheet.create({});
