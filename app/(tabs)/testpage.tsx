import {
  Image,
  StyleSheet,
  Platform,
  FlatList,
  View,
  TouchableOpacity,
} from "react-native";
import Button from "@/components/components/Button";
import { useState } from "react";
import Test from "@/components/components/Test";

export default function HomeScreen() {
  const [array, setArray] = useState([
    { title: "a", id: 0, selected: false },
    { title: "a", id: 1, selected: false },
    { title: "b", id: 2, selected: false },
    { title: "3", id: 3, selected: false },
    { title: "4", id: 4, selected: false },
    { title: "5", id: 5, selected: false },
  ]);
  const [seletedIds, setSeletedIds] = useState<number[]>([]);
  const [prev, setprev] = useState(-1);
  const [prev2, setprev2] = useState(-1);
  const [select, setSelect] = useState(true);

  function onClick(id: number) {
    // if (select === false) {
    //   for (let i = 0; i < array.length; i++) {
    //     if (array[i].selected === true) makeSelection(i);
    //   }
    //   setSelect(true);
    // }
    if (array[id].selected === true) {
      // console.log("c");
      removeSelection(id);
      setprev(id);
      return;
    } else if (array[id].selected === false) {
      if (select === false) {
        for (let i = 0; i < array.length; i++) {
          removeSelection(i);
        }
      }
      makeSelection(id);
      setSelect(true);
    }

    if (id > prev && prev != -1) {
      if (array[prev].selected === true) {
        for (let j = prev + 1; j < id; j++) {
          makeSelection(j);
        }
      }
    }
    if (select === true) {
      if (id < prev) {
        if (array[prev].selected === true) {
          for (let j = id + 1; j < prev; j++) {
            if (array[j].selected !== true) makeSelection(j);
            if (array[j].selected !== true) makeSelection(j);
          }
          setSelect(false);
        }
      }
    }
    setprev(id);
  }

  function makeSelection(id: number, prev?: number) {
    const newArr = [...array];
    newArr[id].selected = true;
    setArray(newArr);
  }
  function removeSelection(id: number, prev?: number) {
    const newArr = [...array];
    newArr[id].selected = false;
    setArray(newArr);
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
        {/* {array && (
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
        )} */}
        <Test />
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
