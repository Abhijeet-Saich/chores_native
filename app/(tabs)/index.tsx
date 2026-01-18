import useTheme from '@/hooks/useTheme';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text>Home Tab</Text>
      <TouchableOpacity onPress={toggleDarkMode} >
        <Text>Press Me like a boob</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
