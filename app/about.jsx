import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>About Us</Text>
      <Text style={style.text}>
        เราคือเว็บไซต์สำหรับการหาหนังสือ
      </Text>
    </View>
  );
};
export default About;

const style = StyleSheet.create({
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
