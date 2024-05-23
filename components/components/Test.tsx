import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

interface testProps {}

function Test(props: testProps): JSX.Element {
  const [response, setResponse] = useState<String>();
  async function getItems() {
    const res = await fetchData();
    setResponse(res);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      {response && <Text>{response[0]}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Test;

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
    return JSON.stringify(json);
    // console.log(json);
  } catch (error) {
    return error;
  }
};
