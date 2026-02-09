
import { Image } from 'expo-image';
import { Platform, StyleSheet, FlatList, View } from 'react-native';

import { Collapsible } from '@/components/ui/collapsible';
import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { HorizCardList } from '@/components/ui/carousels/horiz-card-list';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

const cardData = [
  { id: '1', title: 'Card 1', desc: 'description 1' },
  { id: '2', title: 'Card 2', desc: 'description 2' },
  { id: '3', title: 'Card 3', desc: 'description 3' },
  { id: '4', title: 'Card 4', desc: 'description 4' },
  { id: '5', title: 'Card 5', desc: 'description 5' },
];

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="01.square.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          User Settings
        </ThemedText>
      </ThemedView>
      {/*Horiz Flatlist*/}
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Your Cards
        </ThemedText>
      </ThemedView>
      <HorizCardList
        data={cardData}
        title="Your Cards"
        onCardPress={(card) => console.log('Pressed:', card.title)}
        emptyMessage="You don' t have any data"
      />
    </ParallaxScrollView >
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
});
