import { FlatList, ListRenderItem, StyleSheet, ViewStyle } from 'react-native';
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { BaseCardData } from '../cards/types';

interface CardListProps<T extends BaseCardData> {
  data: T[];
  renderCard: (item: T, onPress?: () => void) => React.ReactElement;
  title?: string;
  horizontal?: boolean;
  showsScrollIndicator?: boolean;
  contentContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onCardPress?: (item: T) => void;
  emptyMessage?: string;
}

export function HorizCardList<T extends BaseCardData>({
  data,
  renderCard,
  title,
  horizontal = true,
  showsScrollIndicator = false,
  contentContainerStyle,
  containerStyle,
  onCardPress,
  emptyMessage = 'No cards available',
}: CardListProps<T>) {
  const renderItem: ListRenderItem<T> = ({ item }) => (
    renderCard(item, onCardPress ? () => onCardPress(item) : undefined));

  const renderEmpty = () => (
    <ThemedView style={styles.emptyContainer}>
      <ThemedText>{emptyMessage}</ThemedText>
    </ThemedView >
  );

  return (
    <ThemedView style={containerStyle}>
      {title && (
        <ThemedText type="subtitle" style={styles.title}>
          {title}
        </ThemedText>
      )}
      <FlatList
        data={data}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsScrollIndicator}
        showsVerticalScrollIndicator={showsScrollIndicator}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[styles.container, contentContainerStyle]}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingTop: 10,
    paddingRight: 16,
  },
  title: {
    marginTop: 12,
    marginBottom: 12,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
