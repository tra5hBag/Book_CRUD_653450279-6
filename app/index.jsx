import { StyleSheet, Image, Text, View } from "react-native";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={style.container}>
      <Image
        source={require("../assets/image/profile.jpg")}
        style={style.profile}
      />
      <Text style={style.title}>Hello world</Text>
      <Text style={style.text}>We are CIS</Text>
      <Link href={"/about"} style={style.button}>
        <Text>About Us</Text>
      </Link>
      <Link href={"/book"} style={style.button}>
        <Text>Books</Text>
      </Link>
      <Link href={"/signin"} style={style.button}>
        <Text>Signin</Text>
      </Link>
      <Link href={"/signup"} style={style.button}>
        <Text>Signup</Text>
      </Link>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    color: "#fff",
  },
  container: {
    marginVertical: 14,
    marginHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 34,
  },
  text: {},
  profile: {
    height: 128,
    width: 128,
    borderRadius: 50,
  },
});
