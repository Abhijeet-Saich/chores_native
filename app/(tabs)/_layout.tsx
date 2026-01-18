import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const {colors} = useTheme()
  return (
    <Tabs screenOptions={{ 
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        headerShown: false,
        tabBarStyle : {
            backgroundColor : colors.surface,
            borderTopWidth : 1,
            borderTopColor : colors.border,
            paddingTop : 10,
            height : 90
        },
        tabBarLabelStyle : {

        }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chores',
          tabBarIcon: ({ color, size }) => <Ionicons name='flash-outline' size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Ionicons name='settings' size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
