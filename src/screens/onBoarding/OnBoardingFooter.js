import React, { useEffect, useRef } from "react";
import { View, Dimensions, StyleSheet, Animated } from "react-native";

const { width } = Dimensions.get("window");
const COLORS = { primary: "#282534", white: "#fff" };

const OnBoardingFooter = ({ slides, currentSlideIndex }) => {
  const indicatorWidths = slides.map(
    () => useRef(new Animated.Value(10)).current
  );

  const animateIndicator = (index) => {
    Animated.timing(indicatorWidths[index], {
      toValue: currentSlideIndex === index ? 25 : 10,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slides.forEach((_, index) => {
      animateIndicator(index);
    });
  }, [currentSlideIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.indicator,
              { width: indicatorWidths[index] },
              currentSlideIndex === index && { backgroundColor: COLORS.white },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  indicator: {
    height: 4,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 50,
  },
});

export default OnBoardingFooter;
