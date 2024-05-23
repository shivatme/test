import AppImage from "@/components/components/AppImage";
import DetailItem from "@/components/components/DetailItem";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";

interface detailsPageProps {
  //   id;
}

function detailsPage(props: detailsPageProps): JSX.Element {
  const { item } = useLocalSearchParams<any>();
  const [imageError, setImageError] = useState(false);

  const data = JSON.parse(item);
  console.log(data.imageurl);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AppImage imageUrl={data.imageurl} />

      {/* {Object.entries(data).map(([key, value]) => (
        <View key={key} style={styles.itemContainer}>
          <Text style={styles.keyText}>{key}:</Text>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      ))} */}

      <DetailItem title={"Size"} description={data.size} />
      <DetailItem title={"Shade"} description={data.shade} />
      <DetailItem title={"Shape"} description={data.shape} />
      <DetailItem title={"Price"} description={"₹" + data.price} />
      <DetailItem title={"Certificate"} description={data.certificateid} />
      <DetailItem title={"Clarity"} description={data.clarity} />
      <DetailItem title={"Color Type"} description={data.colortype} />
      <DetailItem title={"Measurements"} description={data.measurements} />
      <DetailItem title={"Color Type"} description={data.colortype} />
      <DetailItem title={"Color Type"} description={data.colortype} />
      <DetailItem title={"Color Type"} description={data.colortype} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  keyText: {
    fontWeight: "bold",
    marginRight: 8,
  },
  valueText: {
    flexShrink: 1,
  },
});

export default detailsPage;
