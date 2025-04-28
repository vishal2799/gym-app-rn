import React from "react";
import { View, Text, Image, SafeAreaView, Button, StyleSheet, TouchableOpacity } from "react-native";
import Swiper from "react-native-swiper"; // Swiper for the onboarding carousel

const CustomSwiper = () => {
  return (
    <>
      {/* <Swiper
        loop={false}
        showsPagination={false}
      >
        <View className="flex-1 items-center justify-center p-4">
          <Image
            source={require("../assets/images/gym1.jpg")} // Update with your image path
            className="w-1/2 h-1/2"
          />
          <Text className="text-xl font-bold mt-4">Welcome to GymApp</Text>
          <Text className="text-lg text-center mt-2">
            Start your fitness journey with the right tools to track your progress.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center p-4">
          <Image
            source={require("../assets/images/gym1.jpg")} // Update with your image path
            className="w-1/2 h-1/2"
          />
          <Text className="text-xl font-bold mt-4">Track Your Workouts</Text>
          <Text className="text-lg text-center mt-2">
            Monitor your workouts and stay motivated with easy-to-track stats.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center p-4">
          <Image
            source={require("../assets/images/gym1.jpg")} // Update with your image path
            className="w-1/2 h-1/2"
          />
          <Text className="text-xl font-bold mt-4">Stay Consistent</Text>
          <Text className="text-lg text-center mt-2">
            Stay on track with personalized plans and daily reminders.
          </Text>
        </View>
      </Swiper> */}
      <Swiper style={styles.wrapper} showsButtons loop={false}>
    <View testID="Hello" style={styles.slide1}>
        <View style={{backgroundColor: '#9DD6EB', height: '50%', width: '100%'}} />
        <View className="w-full flex-row px-4">
        <Text style={styles.text}>Hello Swiper</Text>
        <TouchableOpacity
                  onPress={() => console.log('work')} // Navigate to onboarding screen
                  className="bg-secondary-900 py-3 px-5 rounded-full w-full items-center"
                >
                  <Text className="text-white font-ubold text-lg font-semibold">Get Started</Text>
                </TouchableOpacity>
        </View>
    </View>
    <View testID="Beautiful" style={styles.slide1}>
        <View style={{backgroundColor: '#97CAE5', height: '50%', width: '100%'}} />
        <View>
        <Text style={styles.text}>Hello Swiper dvdvddfvdffdvvdvvvvv</Text>
        <TouchableOpacity
                  onPress={() => console.log('work')} // Navigate to onboarding screen
                  className="bg-secondary-900 py-3 px-5 rounded-full w-full items-center"
                >
                  <Text className="text-white font-ubold text-lg font-semibold">Get Started</Text>
                </TouchableOpacity>
        </View>
    </View>
    <View testID="Simple" style={styles.slide1}>
        <View style={{backgroundColor: '#92BBD9', height: '50%', width: '100%'}} />
        <View>
        <Text style={styles.text}>Hello Swiper</Text>
        <TouchableOpacity
                  onPress={() => console.log('work')} // Navigate to onboarding screen
                  className="bg-secondary-900 py-3 px-5 rounded-full w-full items-center"
                >
                  <Text className="text-white font-ubold text-lg font-semibold">Get Started</Text>
                </TouchableOpacity>
        </View>
    </View>
  </Swiper>
  </>
  );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        alignItems: 'center',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }
});

export default CustomSwiper;
