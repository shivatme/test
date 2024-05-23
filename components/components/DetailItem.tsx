import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface DetailItemProps {}

function DetailItem(props: DetailItemProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    alignItems: "center",
    paddingVertical: 20,
    borderWidth: 1,
    borderTopColor: "transparent",
    borderBottomColor: "#d0d0d0",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
  },
  title: {
    fontWeight: "500",
  },
  description: {
    fontWeight: "300",
  },
});

export default DetailItem;
