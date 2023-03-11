import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useAppSelector } from "../redux/hooks";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../redux/slices/basketSlice";
import { useNavigation } from "@react-navigation/native";

export default function BasketIcon() {
  const items = useAppSelector(selectBasketItems);
  const basketTotal = useAppSelector(selectBasketTotal);
  const navigation = useNavigation();

  if (!items.length) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket" as never)}
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ${basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
