import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import ParallaxScrollView from '@/components/parallax-scroll-view';

import { OptionsRow, ProfileOptionsContainer } from '@/components/ui/containers/profile-options-container';

export default function ProfileScreen() {
  const user = "UserName";

  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push('/(pages)/profile/settings')}
              style={{ marginRight: 24 }}>
              <Ionicons name="settings-outline" size={24} color="white" />
            </TouchableOpacity >
          ),
        }}
      />
      < ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
        <ThemedText type="title">
          {`Hi, \n${user}!`}
        </ThemedText>

        <ProfileOptionsContainer style={{ marginTop: 40 }}>
          <OptionsRow
            type="control"
            label="Store Meals For"
            control={
              <TextInput
                style={styles.numberInput}
                value="30"
                keyboardType="numeric"
              />
            }
          />
          <OptionsRow
            type="navigation"
            label="View linked third-party apps"
            onPress={() => router.push('/(pages)/profile/linked-apps')}
          />
        </ProfileOptionsContainer>
      </ParallaxScrollView >
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  scrollContainer: {
    paddingRight: 16,
    gap: 12,
  },
  numberInput: {
    backgroundColor: '#2a2f4a',
    color: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 6,
    textAlign: 'center',
    minWidth: 60,
  },
});
