import React from "react";
import { Entypo } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

interface ListItemProps {
  item: any;
  onClickIcon: any;
  backgroundColor: string;
}

function ListItem({
  item,
  onClickIcon,
  backgroundColor,
}: ListItemProps): JSX.Element {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{item.shape}</Text>
      <Text style={styles.text}>{item.size}</Text>
      <Text style={styles.text}>{item.price}</Text>
      <Text style={styles.text}>{item.cut}</Text>
      <Link
        href={{
          pathname: "/detailsPage",
          params: { item: JSON.stringify(item) },
        }}
        asChild
      >
        <Entypo
          name="chevron-small-right"
          size={24}
          color="black"
          onPress={() => onClickIcon(item.stoneid)}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    // width: "100%",
    height: 35,
    marginVertical: 2,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  text: {
    color: "black",
  },
});

export default ListItem;
