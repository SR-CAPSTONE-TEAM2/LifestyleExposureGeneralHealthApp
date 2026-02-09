import React from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { styles } from '../styles';
import { FoodItem } from '../types';

interface FoodModalProps {
  visible: boolean;
  foodItem: FoodItem | null;
  onClose: () => void;
}

export const FoodModal = ({ visible, foodItem, onClose }: FoodModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <ThemedView style={styles.modalContent}>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={onClose}
          >
            <ThemedText type="title">×</ThemedText>
          </TouchableOpacity>
          {foodItem && (
            <>
              <ThemedText type="title" style={styles.modalTitle}>{foodItem.name}</ThemedText>
              <View style={styles.modalNutrientRow}>
                <ThemedText type="subtitle">Calories</ThemedText>
                <ThemedText type="defaultSemiBold">{foodItem.calories} kcal</ThemedText>
              </View>
              <View style={styles.modalNutrientRow}>
                <ThemedText type="subtitle">Protein</ThemedText>
                <ThemedText type="defaultSemiBold">{foodItem.protein}g</ThemedText>
              </View>
              <View style={styles.modalNutrientRow}>
                <ThemedText type="subtitle">Carbs</ThemedText>
                <ThemedText type="defaultSemiBold">{foodItem.carbs}g</ThemedText>
              </View>
              <View style={styles.modalNutrientRow}>
                <ThemedText type="subtitle">Fat</ThemedText>
                <ThemedText type="defaultSemiBold">{foodItem.fat}g</ThemedText>
              </View>
            </>
          )}
        </ThemedView>
      </View>
    </Modal>
  );
};
