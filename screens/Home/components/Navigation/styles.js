import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  TopNaviContainer: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  NavView: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 20,
    height: 36,
    position: "relative",
    borderRadius: 4
  },
  TouchableLeftButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007aff",
    borderRadius: 4,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  TouchableRightButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007aff",
    borderRadius: 4,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
});


export default styles;
