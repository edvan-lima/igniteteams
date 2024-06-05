import { Slot } from "expo-router"
import "@/styles/globals.css"
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto"
import { Loading } from "@/components/Loading"
import { SafeAreaView } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function _layout() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar style="light" />
      <Slot />
    </SafeAreaView>
  )
}
