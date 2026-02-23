import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ProgressBar } from '@/components/ui/progress-bars/progress-bar-default';
import { RECOMMENDED } from '@/constants/recommended';

interface SummarySectionProps {
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  percents: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export const SummarySection = ({ totals, percents }: SummarySectionProps) => {
  return (
    <ThemedView style={styles.summaryContainer}>
      {/* Calories */}
      <ThemedView style={styles.nutrientRow}>
        <View style={styles.nutrientLabel}>
          <ThemedText type="subtitle">Calories</ThemedText>
          <ThemedText type="defaultSemiBold">{totals.calories} / {RECOMMENDED.calories}</ThemedText>
        </View>
        <ProgressBar percent={percents.calories} />
      </ThemedView>

      {/* Protein */}
      <ThemedView style={styles.nutrientRow}>
        <View style={styles.nutrientLabel}>
          <ThemedText type="subtitle">Protein</ThemedText>
          <ThemedText type="defaultSemiBold">{totals.protein} / {RECOMMENDED.protein}g</ThemedText>
        </View>
        <ProgressBar percent={percents.protein} />
      </ThemedView>

      {/* Carbs */}
      <ThemedView style={styles.nutrientRow}>
        <View style={styles.nutrientLabel}>
          <ThemedText type="subtitle">Carbs</ThemedText>
          <ThemedText type="defaultSemiBold">{totals.carbs} / {RECOMMENDED.carbs}g</ThemedText>
        </View>
        <ProgressBar percent={percents.carbs} />
      </ThemedView>

      {/* Fat */}
      <ThemedView style={styles.nutrientRow}>
        <View style={styles.nutrientLabel}>
          <ThemedText type="subtitle">Fat</ThemedText>
          <ThemedText type="defaultSemiBold">{totals.fat} / {RECOMMENDED.fat}g</ThemedText>
        </View>
        <ProgressBar percent={percents.fat} />
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    marginVertical: 12,
    gap: 12,
  },
  nutrientRow: {
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  nutrientLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
