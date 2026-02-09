import { FlatList, ListRenderItem, StyleSheet, ViewStyle } from 'react-native';
import { Card } from '@/components/ui/cards/card';
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

export interface DefaultCardData {
  id: string;
  title: string;
  desc: string;
}

interface CardListProps {
  data: DefaultCardData[];
  title: string;
  horizontal?: boolean;
  showsScrollIndicator?: boolean;
  contentContainerStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onCardPress?: (item: DefaultCardData) => void;
  emptyMessage?: string;
}

export function HorizCardList({
  data,
  title,
  horizontal = true,
  showsScrollIndicator = false,
  contentContainerStyle,
  containerStyle,
  onCardPress,
  emptyMessage = 'No cards available',
}: CardListProps) {
  const renderItem: ListRenderItem<DefaultCardData> = ({ item }) => (
    <Card
      title={item.title}
      desc={item.desc}
      onPress={onCardPress ? () => onCardPress(item) : undefined}
    />
  );

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
    paddingRight: 16,
  },
  title: {
    marginBottom: 12,
  },
  emptyContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
