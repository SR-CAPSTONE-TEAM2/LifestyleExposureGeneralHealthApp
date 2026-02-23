import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  blankHeader: {
    height: 60,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  titleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
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
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  modalContent: {
    width: '85%',
    borderRadius: 12,
    padding: 20,
    paddingTop: 14,
  },
  modalClose: {
    alignSelf: 'flex-end',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  modalTitle: {
    marginBottom: 16,
  },
  modalNutrientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  reportSection: {
    marginVertical: 16,
    paddingHorizontal: 4,
  },
  reportTitle: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  reportSubsection: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  vitaminsList: {
    paddingHorizontal: 12,
    paddingBottom: 12,
    gap: 8,
  },
  vitaminNutrientRow: {
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  vitaminLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
