import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles["input"]}
        placeholder="new todo..."
        onChangeText={(val) => {
          changeHandler(val);
        }}
        value={text}
      />
      <Button
        title="Add Todo"
        color="coral"
        onPress={() => {
          submitHandler(text);
          if (text.length > 3) {
            setText("");
          }
        }}
      />
      {/* <TouchableOpacity
        style={{
          backgroundColor: "coral",
          marginTop: 10,
          marginBottom: 10,
          padding: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "600",
            alignSelf: "center",
          }}
        >
          Add Todo
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    // outlineStyle: "none",
  },
});
export default AddTodo;
