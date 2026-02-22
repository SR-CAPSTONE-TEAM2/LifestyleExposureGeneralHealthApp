import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          freezeOnBlur: true,
          title: 'Profile',
        }}
      />
      {/* Other screens */}
      <Stack.Screen
        name='settings'
        options={{
          headerShown: false,
          freezeOnBlur: true,
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name='linked-apps'
        options={{
          headerShown: true,
          freezeOnBlur: true,
          title: 'Linked Third-Party Apps',
        }}
      />
    </Stack>
  );
}
