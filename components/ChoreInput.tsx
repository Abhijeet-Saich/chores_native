import { createHomeStyles } from "@/assets/styles/home.styles";
import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

const ChoreInput = () => {
  const { colors } = useTheme();
  const homeStyles = createHomeStyles(colors);

  const [newChore, setNewChore] = useState("");
  const addChore = useMutation(api.chores.addChore);

  const handleAddChore = async () => {
    if (newChore.trim()) {
      try {
        await addChore({ text: newChore.trim() });
        setNewChore("");
      } catch (error) {
        console.log("Error adding a Chore", error);
        Alert.alert("Error", "Failed to add Chore");
      }
    }
  };

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="What needs to be done?"
          value={newChore}
          onChangeText={setNewChore}
          onSubmitEditing={handleAddChore}
          placeholderTextColor={colors.textMuted}
          multiline
        />
        <TouchableOpacity onPress={handleAddChore} activeOpacity={0.8} disabled={!newChore.trim()}>
          <LinearGradient
            colors={newChore.trim() ? colors.gradients.primary : colors.gradients.muted}
            style={[homeStyles.addButton, !newChore.trim() && homeStyles.addButtonDisabled]}
          >
            <Ionicons name="add" size={24} color="#ffffff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChoreInput;