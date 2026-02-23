import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }} headerImage={<View style={styles.blankHeader} />}>
      <ThemedView style={styles.titleContainer}>
      </ThemedView>
      <ThemedView style={styles.centerContent}>
        <ThemedText type="subtitle">Coming soon</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
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
  blankHeader: {
    height: 60,
    backgroundColor: 'transparent',
  },
  centerContent: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
