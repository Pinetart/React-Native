import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [name, setName] = useState("Shaun");
  const [person, setPerson] = useState({ name: "Mario", age: 40 });

  const clickHandler = () => {
    name === "Shaun" ? setName("chun-li") : setName("Shaun");
    person.name === "Mario"
      ? setPerson({ name: "Luigi", age: 45 })
      : setPerson({ name: "Mario", age: 40 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and he is {person.age} years old
      </Text>
      <View style={styles["buttonContainer"]}>
        <Button title="Update Name" onPress={clickHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
