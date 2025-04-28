import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AccountLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='gender' />
    </Stack>
  )
}

export default AccountLayout