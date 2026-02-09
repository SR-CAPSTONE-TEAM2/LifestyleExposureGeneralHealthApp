import React from 'react';
import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { styles } from '../styles';
import { ProgressBar } from '../utils';
import { RECOMMENDED } from '../constants';

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
