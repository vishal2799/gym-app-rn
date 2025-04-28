import { onboardingData } from "@/constants";
import { router } from "expo-router";
import { setItem } from "expo-secure-store";
import React, { useRef, useState } from "react";
import { View, Text, Image, SafeAreaView, Button, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Swiper from "react-native-swiper"; // Swiper for the onboarding carousel

const CustomSwiper = () => {
  const swiperRef = useRef<Swiper>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      swiperRef.current?.scrollBy(1); // Move to next slide
    } else {
      // Last screen - Done button pressed
      console.log("Onboarding Complete");
      // Navigate to Home or set onboardingCompleted = true
    }
  };

  const handleDone = async () => {
      try {
        await setItem('onboardingCompleted', 'true');
        router.push("/(account)/gender"); 
      } catch (error) {
        console.error("Failed to save gender", error);
      }
    };


  return (
    <>
      <Swiper         ref={swiperRef} loop={false} activeDotColor="#6842FF" showsButtons={false}         onIndexChanged={(index) => setCurrentIndex(index)}
      >
          <View testID={onboardingData[0].id} style={styles.slide1}>
            <Image
                  source={onboardingData[0].image} // Replace with your background image
                  style={{ width: '100%', height: '60%' }} // Ensure it covers the full screen
               />
               <View style={{height: '40%', width: '100%', paddingVertical: 80, paddingHorizontal: 30, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text className="text-3xl font-ubold text-center text-primary">{onboardingData[0].text}</Text>
          <TouchableOpacity
                    onPress={handleNext} // Navigate to onboarding screen
                    className="bg-secondary-900 py-3 px-5 rounded-full w-full items-center"
                  >
                    <Text className="text-white font-ubold text-lg font-semibold">Next</Text>
                  </TouchableOpacity>
          </View>
      </View> 
      <View testID={onboardingData[1].id} style={styles.slide1}>
            <Image
                  source={onboardingData[1].image} // Replace with your background image
                  style={{ width: '100%', height: '60%' }} // Ensure it covers the full screen
               />
               <View style={{height: '40%', width: '100%', paddingVertical: 80, paddingHorizontal: 30, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text className="text-3xl font-ubold text-center text-primary">{onboardingData[1].text}</Text>
          <TouchableOpacity
                    onPress={handleNext} // Navigate to onboarding screen
                    className="bg-secondary-900 py-3 px-5 rounded-full w-full items-center"
                  >
                    <Text className="text-white font-ubold text-lg font-semibold">Next</Text>
                  </TouchableOpacity>
          </View>
      </View> 
      <View testID={onboardingData[2].id} style={styles.slide1}>
            <Image
                  source={onboardingData[2].image} // Replace with your background image
                  style={{ width: '100%', height: '60%' }} // Ensure it covers the full screen
               />
               <View style={{height: '40%', width: '100%', paddingVertical: 80, paddingHorizontal: 30, flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text className="text-3xl font-ubold text-center text-primary">{onboardingData[2].text}</Text>
          <TouchableOpacity
                    onPress={handleDone} // Navigate to onboarding screen
                    className="bg-secondary-900 py-3 px-5 rounded-full w-full items-center"
                  >
                    <Text className="text-white font-ubold text-lg font-semibold">Next</Text>
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
