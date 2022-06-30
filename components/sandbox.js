import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles["container"]}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 2,
    backgroundColor: "gold",
    padding: 10,
    // alignSelf: "flex-end",
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 10,
  },
  boxFour: {
    flex: 3,
    backgroundColor: "skyblue",
    padding: 10,
    // alignSelf: "flex-start",
  },
});
export default Sandbox;
