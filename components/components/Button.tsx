import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface buttonProps {
  title: String;
  selected: boolean;
}

function Button(props: buttonProps): JSX.Element {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.selected ? "grey" : "white" },
      ]}
    >
      <Text style={{ color: "black", fontSize: 10 }}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    // flex: 1,
    // backgroundColor: "grey",
  },
});

export default Button;
