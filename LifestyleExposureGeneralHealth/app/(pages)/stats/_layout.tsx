import { Stack } from 'expo-router';

export default function StatsLayout() {
  return (
    <Stack
      screenOptions={{ freezeOnBlur: true, }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          freezeOnBlur: true,
          title: 'Stats',
        }}
      />
      {/* Other sub-screens */}
      <Stack.Screen
        name="other-sub-screen"
        options={{
          // Memory stuff
          freezeOnBlur: true,
        }}
      />
    </Stack>
  );
}
