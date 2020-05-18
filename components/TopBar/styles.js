import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3f3f6f",
    paddingTop: 35,
    maxHeight: 64,
    zIndex: -1
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between"
  },
  titleBlock: {
    position: "absolute",
    paddingTop: 35,
    width: "100%",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 20
  }
});
