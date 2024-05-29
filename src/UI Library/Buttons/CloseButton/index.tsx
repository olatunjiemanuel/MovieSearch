import { TouchableOpacity } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";

interface CloseButtonProps {
  onPress: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} testID="closeButton">
      <AntDesign name="close" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default CloseButton;
