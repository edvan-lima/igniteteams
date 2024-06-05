import { View, Text } from "react-native"
import React, { ReactNode } from "react"

export function Container({ children }: { children: ReactNode }) {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      {children}
    </View>
  )
}
