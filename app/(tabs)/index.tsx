import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/components/Button";
import { useState } from "react";

export default function HomeScreen() {
  const arr = [
    { title: "a", id: 0, selected: false },
    { title: "a", id: 1, selected: false },
    { title: "b", id: 2, selected: false },
    { title: "3", id: 3, selected: false },
    { title: "4", id: 4, selected: false },
    { title: "5", id: 5, selected: false },
  ];

  const [array, setArray] = useState(arr);
  const [seletedIds, setSeletedIds] = useState<number[]>([]);
  const [prev, setprev] = useState(-1);
  const [prev2, setprev2] = useState(-1);

  function onClick(id: number) {
    if (id > prev && prev != -1) {
      if (array[prev].selected === true) {
        for (let j = prev + 1; j < id; j++) {
          makeSelection(j);
        }
      }
    }
    if (id < prev && prev != -1) {
      if (array[prev].selected === true) {
        for (let j = id + 1; j < prev; j++) {
          makeSelection(j, prev);
        }
      }
    }
    if (prev < prev2) {
      for (let i = prev; i < prev2; i++) {
        makeSelection;
      }
    }
    makeSelection(id);
  }

  function makeSelection(id: number, prev?: number) {
    if (prev) setprev2(prev);

    setprev(id);
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array[i].selected = !array[i].selected;
      }
    }
    setArray([...array]);
  }
  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          top: 100,
          // backgroundColor: "red",
        }}
      >
        {array && (
          <FlatList
            data={array}
            horizontal
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onClick(item.id)}>
                <Button
                  key={item.id}
                  title={item.title}
                  selected={item.selected}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
