import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { setItem } from '@/utils/storage'
import { useColorScheme } from 'nativewind';


const FillScreen = () => {
    const { setColorScheme } = useColorScheme();
  setColorScheme("light");
 
  const [image, setImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleContinue = async () => {
    try {
            await setItem('accountCompleted', 'true');
            router.push("/(auth)/sign-in"); 
          } catch (error) {
            console.error("Failed to save profile", error);
          }
  };

  return (
    <SafeAreaView className={`bg-white dark:bg-primary flex-1 justify-center items-center`}>
      <View className='w-full p-8 flex-col justify-between h-full'>
        <View>
        <Text className='text-primary dark:text-white text-center font-ubold text-3xl'>Fill Your Profile</Text>
        <Text className='text-primary dark:text-accent text-center font-uregular text-xl mt-5'>Don't worry, you can always change it later, or you can skip it for now.</Text>
        </View>

        <View className='w-full items-center'>
        <View className="relative mb-6">
        <View className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 items-center justify-center overflow-hidden">
          {image ? (
            <Image source={{ uri: image }} className="w-full h-full" />
          ) : (
            <Ionicons name="camera" size={32} color="gray" />
          )}
        </View>

        {/* Pencil Icon Button */}
        <TouchableOpacity
          onPress={pickImage}
          className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md"
        >
          <Ionicons name="pencil" size={16} color="black" />
        </TouchableOpacity>
      </View>
      <TextInput
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
        placeholderTextColor="#999"
        className="w-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white px-4 py-5 rounded-xl mb-4"
      />
      <TextInput
        value={nickname}
        onChangeText={setNickname}
        placeholder="Nickname"
        placeholderTextColor="#999"
        className="w-full bg-gray-100 dark:bg-gray-800 text-primary dark:text-white px-4 py-5 rounded-xl mb-4"
      />

<View className="flex-row items-center bg-gray-100 dark:bg-gray-800 text-primary dark:text-white px-4 py-5 rounded-xl mb-4">
      <TextInput
      value={email}
      onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="#888"
        className="flex-1 text-base text-black dark:text-white"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <FontAwesome name="envelope-o" size={20} color="#888" />
    </View>

    {/* Country Code and Phone Number */}
    <View className="flex-row items-center  bg-gray-100 dark:bg-gray-800 text-primary dark:text-white px-4 py-5 rounded-xl">
        
        {/* Country Code Input */}
        <TextInput
          className="w-10 text-black dark:text-white"
          placeholder="+91"
          placeholderTextColor="#888"
          value={countryCode}
          onChangeText={setCountryCode}
        />

        {/* Divider */}
        <View className="w-px h-6 bg-gray-400 mx-3" />

        {/* Phone Number Input */}
        <TextInput
          className="flex-1 text-black dark:text-white"
          keyboardType="phone-pad"
          placeholder="Enter phone number"
          placeholderTextColor="#888"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      </View>

        <View className='flex-row justify-between items-center gap-3'>
        <TouchableOpacity
                            onPress={handleContinue} // Navigate to onboarding screen
                            className="bg-secondary-100 dark:bg-gray-700 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-secondary-900 dark:text-white font-ubold text-lg font-semibold">Skip</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={handleContinue} // Navigate to onboarding screen
                            className="bg-secondary-900 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-white font-ubold text-lg font-semibold">Continue</Text>
                          </TouchableOpacity>
        </View>
        

      </View>
    </SafeAreaView>
  )
}

export default FillScreen