import React from 'react';
import { View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { styles } from './styles';
import { MealType } from './types';

export const ProgressBar = ({ percent }: { percent: number }) => {
  const clamped = Math.max(0, Math.min(100, percent));
  const fillColor = percent >= 200 ? '#f44336' : '#4caf50';
  return (
    <View style={styles.progressRow}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${clamped}%`, backgroundColor: fillColor }]} />
      </View>
      <ThemedText type="defaultSemiBold" style={styles.percentText}>{Math.round(percent)}%</ThemedText>
    </View>
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

export const toggleReportSection = (
  section: string,
  expandedReportSections: Set<string>,
  setExpandedReportSections: (sections: Set<string>) => void
) => {
  const updated = new Set(expandedReportSections);
  if (updated.has(section)) {
    updated.delete(section);
  } else {
    updated.add(section);
  }
  setExpandedReportSections(updated);
};
