import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  Text,
  ActivityIndicator,
  Pressable,
} from "react-native";

import Test from "@/components/components/Test";
import ListItem from "@/components/components/ListItem";
import { TouchableOpacity } from "react-native-gesture-handler";

interface indexProps {}

function index(props: indexProps): JSX.Element {
  // const [response, setResponse] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [response, setResponse] = useState<any>();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  async function getItems() {
    setRefreshing(true);
    const res = await fetchData();
    setResponse(res);
    setRefreshing(false);
  }

  const handleClick = (id: number) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };

  function logSelectedIds() {
    console.log("Selected IDs are: " + selectedIds);
  }

  useEffect(() => {
    getItems();
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button title="Log Selected" onPress={logSelectedIds} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Shape</Text>
        <Text style={styles.text}>Size</Text>
        <Text style={styles.text}>Price</Text>
        <Text style={styles.text}>Cut</Text>
        <Text style={styles.text}>Open</Text>
      </View>
      {!response ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <FlatList
          refreshing={refreshing} // Set refreshing state
          onRefresh={getItems}
          data={response}
          renderItem={({ item }) => (
            // <TouchableOpacity onPress={() => handleClick(item.stoneid)}>
            <Pressable onPress={() => handleClick(item.stoneid)}>
              <ListItem
                key={item.stoneid}
                item={item}
                onClickIcon={handleClick}
                backgroundColor={
                  selectedIds.includes(item.stoneid) ? "#8bbcf0" : "white"
                }
              />
            </Pressable>
            // </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
  },
  container2: {
    flexDirection: "row",
    // width: "100%",
    height: 50,
    marginVertical: 2,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    backgroundColor: "#2c7cc1",
  },
  text: {
    color: "white",
    fontSize: 18,
    // fontWeight: "",
  },
});

export default index;

const fetchData = async () => {
  try {
    const res = await fetch("http://192.168.51.2:8083/stone/stock/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjQ1MTc1NiwiZXhwIjoxNzE2NDg0MTU2fQ.uc0Y6Qq85di4tEwM8WlYXFovvsmZ8DjkGgdC64gzT-4",
      },
      body: `{
              "shape": [],
              "color": [],
              "fromintensity": "",
              "tointensity": "",
              "fancycolor1": [],
              "fancycolor2": [],
              "clarity": [],
              "cut": [],
              "pol": [],
              "sym": [],
              "flo": [],
              "lab": [],
              "bgm": "",
              "black": "",
              "depthfrom": "",
              "depthto": "",
              "tablefrom": "",
              "tableto": "",
              "ratiofrom": "",
              "ratioto": "",
              "lengthfrom": "",
              "lengthto": "",
              "widthfrom": "",
              "widthto": "",
              "fancyintensity": [],
              "fancyovertone": [],
              "sizemasterid": [],
              "generalsize": [],
              "locationid": [],
              "cpricefrom": "",
              "cpriceto": "",
              "tpricefrom": "",
              "tpriceto": "",
              "reportnumber": ""
          }`,
    });
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
};
