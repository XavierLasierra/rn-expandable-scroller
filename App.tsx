import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ExpandableScroll } from "./src/components/expandableScroll/ExpandableScroll";
import { elements } from "./src/mocks/elements";

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ExpandableScroll elements={elements} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
