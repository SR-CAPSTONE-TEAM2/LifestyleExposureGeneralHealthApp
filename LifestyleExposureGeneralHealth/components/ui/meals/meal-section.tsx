import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { FoodItem, MealType } from '@/types/types';

interface MealSectionsProps {
  items: FoodItem[];
  expandedMeals: Set<MealType>;
  onToggleMeal: (meal: MealType) => void;
  onSelectItem: (item: FoodItem) => void;
}

export const MealSections = ({ items, expandedMeals, onToggleMeal, onSelectItem }: MealSectionsProps) => {
  const mealTypes: MealType[] = ['Breakfast', 'Lunch', 'Dinner'];

  return (
    <>
      {mealTypes.map((meal) => {
        const mealItems = items.filter((i) => i.meal === meal);
        const isExpanded = expandedMeals.has(meal);
        return (
          <ThemedView key={meal} style={styles.mealSection}>
            <TouchableOpacity
              onPress={() => onToggleMeal(meal)}
              style={styles.mealHeader}
              activeOpacity={0.7}
            >
              <ThemedText type="subtitle">{meal}</ThemedText>
              <ThemedText type="defaultSemiBold" style={styles.chevron}>
                {isExpanded ? '▼' : '▶'}
              </ThemedText>
            </TouchableOpacity>
            {isExpanded && (
              <View>
                {mealItems.length === 0 ? (
                  <ThemedText style={styles.noItems}>No items logged</ThemedText>
                ) : (
                  mealItems.map((it) => (
                    <TouchableOpacity
                      key={it.id}
                      style={styles.foodRow}
                      onPress={() => onSelectItem(it)}
                      activeOpacity={0.7}
                    >
                      <ThemedText type="defaultSemiBold">{it.name}</ThemedText>
                      <ThemedText>{it.calories} kcal</ThemedText>
                    </TouchableOpacity>
                  ))
                )}
              </View>
            )}
          </ThemedView>
        );
      })}
    </>
  );
};

export const toggleMeal = (
  meal: MealType,
  expandedMeals: Set<MealType>,
  setExpandedMeals: (meals: Set<MealType>) => void
) => {
  const updated = new Set(expandedMeals);
  if (updated.has(meal)) {
    updated.delete(meal);
  } else {
    updated.add(meal);
  }
  setExpandedMeals(updated);
};
export const styles = StyleSheet.create({
  chevron: {
    fontSize: 12,
  },
  noItems: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontStyle: 'italic',
  },
  foodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginVertical: 4,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  mealSection: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
})
