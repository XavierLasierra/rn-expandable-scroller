import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ExpandableItemElement } from "./src/components/expandableItem/ExpandableItem";
import { ExpandableScroll } from "./src/components/expandableScroll/ExpandableScroll";

const elements: ExpandableItemElement[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    title: "Mountain",
    subtitle: "The big mountain",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8117889/pexels-photo-8117889.jpeg?cs=srgb&dl=pexels-kira-schwarz-8117889.jpg&fm=jpg",
    title: "Plant",
    subtitle: "what a Plant",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8471721/pexels-photo-8471721.jpeg?cs=srgb&dl=pexels-cup-of-couple-8471721.jpg&fm=jpg",
    title: "what is this",
    subtitle: "milk",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    title: "Mountain",
    subtitle: "The big mountain",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8117889/pexels-photo-8117889.jpeg?cs=srgb&dl=pexels-kira-schwarz-8117889.jpg&fm=jpg",
    title: "Plant",
    subtitle: "what a Plant",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8471721/pexels-photo-8471721.jpeg?cs=srgb&dl=pexels-cup-of-couple-8471721.jpg&fm=jpg",
    title: "what is this",
    subtitle: "milk",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    title: "Mountain",
    subtitle: "The big mountain",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8117889/pexels-photo-8117889.jpeg?cs=srgb&dl=pexels-kira-schwarz-8117889.jpg&fm=jpg",
    title: "Plant",
    subtitle: "what a Plant",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8471721/pexels-photo-8471721.jpeg?cs=srgb&dl=pexels-cup-of-couple-8471721.jpg&fm=jpg",
    title: "what is this",
    subtitle: "milk",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    title: "Mountain",
    subtitle: "The big mountain",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8117889/pexels-photo-8117889.jpeg?cs=srgb&dl=pexels-kira-schwarz-8117889.jpg&fm=jpg",
    title: "Plant",
    subtitle: "what a Plant",
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/8471721/pexels-photo-8471721.jpeg?cs=srgb&dl=pexels-cup-of-couple-8471721.jpg&fm=jpg",
    title: "what is this",
    subtitle: "milk",
  },
];

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
