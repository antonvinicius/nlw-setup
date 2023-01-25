import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

export function HabitsEmpty() {
  const { navigate } = useNavigation();

  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não tem nenhum hábito.{"\n"}
      <Text
        onPress={() => navigate("new")}
        className="text-violet-400 text-base underline active:text-violet-500"
      >
        Comece criando um.
      </Text>
    </Text>
  );
}
