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
    </Stack>
  );
}
