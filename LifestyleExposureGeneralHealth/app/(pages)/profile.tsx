
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
import { MealCardData } from '@/components/ui/cards/types';
import { DefaultCard } from '@/components/ui/cards/default-card';
import { MealCard } from '@/components/ui/cards/meal-card';

const cardData = [
  { id: '1', title: 'Card 1', desc: 'description 1' },
  { id: '2', title: 'Card 2', desc: 'description 2' },
  { id: '3', title: 'Card 3', desc: 'description 3' },
  { id: '4', title: 'Card 4', desc: 'description 4' },
  { id: '5', title: 'Card 5', desc: 'description 5' },
];

const mealData: MealCardData[] = [
  {
    id: '1',
    name: 'Grilled Chicken Salad',
    macros: {
      protein: '35g',
      carbs: '12g',
      fat: '8g',
      calories: 320,
    },
    image: require('@/assets/images/generic-meal-image.jpg'),
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Chicken Katsu Wrap',
    macros: {
      protein: '35g',
      carbs: '12g',
      fat: '8g',
      calories: 320,
    },
    image: require('@/assets/images/generic-meal-image.jpg'),
    rating: 4.5,
  },
];

export default function ProfileScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      {/*Horiz Flatlist*/}
      <HorizCardList
        data={cardData}
        title="Your Cards"
        renderCard={(item, onPressed) => <DefaultCard data={item} onPress={onPressed} />}
        onCardPress={(card) => console.log('Pressed:', card.title)}
        emptyMessage="You don' t have any data"
      />
      <HorizCardList
        data={mealData}
        title="Your Meals"
        renderCard={(item, onPressed) => <MealCard data={item} onPress={onPressed} />}
        onCardPress={(card) => console.log('Pressed:', card.name)}
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
