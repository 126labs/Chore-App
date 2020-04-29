import { StyleSheet } from "react-native";

const circleDiameter = 100;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    backgroundColor: 'lightgray'
  },
  circle: {
    height: circleDiameter,
    width: circleDiameter,
    borderRadius: circleDiameter / 2,
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderColor: "white"
  },
  title: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: "600"
  },
  body: {
    fontSize: 14
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(240,240,240,0.7)",
    borderRadius: circleDiameter,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  check: {
    fontSize: 50,
    color: "#333333"
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    flexWrap: "wrap",
    alignItems: "center"
  },
  item: {
    flexBasis: "33%",
    width: "33%"
  }
});

export default styles;
