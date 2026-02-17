import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { MealType } from '@/types/types';

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

const styles = StyleSheet.create({
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
  percentText: {
    width: 48,
    textAlign: 'right',
  },
})
