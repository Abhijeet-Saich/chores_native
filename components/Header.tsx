import { View, Text } from 'react-native'
import React from 'react'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles'
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Header = () => {
  const {colors} = useTheme();
  const homeStyles = createHomeStyles(colors);
  const chores = useQuery(api.chores.getChores);

  const completedCount = chores ? chores.filter((c) => c.isCompleted).length : 0;
  const totalCount = chores ? chores.length : 0;

  const progress = totalCount > 0  ? (completedCount/totalCount) * 100 : 0;
  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>

        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={homeStyles.subtitle}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>
      </View>

      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[homeStyles.progressFill, { width: `${progress}%` }]}
            />
          </View>
          <Text style={homeStyles.progressText}>{Math.round(progress)}%</Text>
        </View>
      </View>
    </View>
  )
}

export default Header