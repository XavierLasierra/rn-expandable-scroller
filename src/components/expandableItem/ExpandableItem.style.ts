import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../theme";

export default StyleSheet.create({
  image: {
    flex: 1,
  },
  subtitle: {
    color: Colors.primary,
    fontSize: Fonts.size.h2,
    fontWeight: Fonts.weight.normal,
  },
  textContainer: {
    alignItems: "center",
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
  },
  title: {
    color: Colors.primary,
    fontSize: Fonts.size.h1,
    fontWeight: Fonts.weight.bold,
    paddingVertical: Metrics.baseSpace,
  },
});
