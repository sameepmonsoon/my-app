import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Animated,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OnBoardingItem from "./OnBoardingItem";
import tw from "twrnc";
import OnBoardingFooter from "./OnBoardingFooter";
import { DATA } from "../../constants/screens/OnBoardingConstants";
import OnBoardingBackDrop from "./OnBoardingBackDrop";
const COLORS = { primary: "#282534", white: "#fff" };
const OnBoarding = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex < DATA.length) {
      const offset = nextSlideIndex * width;
      ref.current.scrollToOffset({ offset, animated: true });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlideIndex = DATA.length - 1;
    const offset = lastSlideIndex * width;
    ref.current.scrollToOffset({ offset, animated: true });
    setCurrentSlideIndex(lastSlideIndex);
  };
  //
  const [widthAnimation] = useState(new Animated.Value(0));
  const animateWidth = () => {
    Animated.timing(widthAnimation, {
      toValue: currentSlideIndex == 0 ? 350 : 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    animateWidth();
  }, []);

  console.log(widthAnimation);
  return (
    <View style={tw`flex flex-1 justify-center items-center p-0`}>
      <OnBoardingBackDrop
        scrollX={scrollX}
        currentIndex={currentSlideIndex}
        width={width}
      />
      <FlatList
        ref={ref}
        data={DATA}
        renderItem={({ item }) => <OnBoardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />

      <OnBoardingFooter slides={DATA} currentSlideIndex={currentSlideIndex} />

      {/* Render buttons */}
      <View style={tw`px-5 justify-between  h-15 flex w-full`}>
        <View style={{ marginBottom: 0 }}>
          {currentSlideIndex == DATA.length - 1 ? (
            <Animated.View style={{ height: 50, width: widthAnimation }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  SKIP
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
