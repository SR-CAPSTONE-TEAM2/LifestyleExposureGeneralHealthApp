import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { styles } from '../styles';
import { FoodItem, MealType } from '../types';

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
