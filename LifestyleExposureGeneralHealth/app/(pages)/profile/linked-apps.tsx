import { View, FlatList, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinkedAppItem } from '@/components/ui/containers/linked-app-item';

const LINKED_APPS = [
  {
    id: '1',
    name: 'My FitnessPal',
    linkedAccount: 'account.email@gmail.com',
    icon: require('@/assets/images/myfitnesspal_app_logo.jpg')
  },
  {
    id: '2',
    name: 'Garmin Connect',
    linkedAccount: 'account.email@gmail.com',
    icon: require('@/assets/images/garmin_connect_app_logo.png'),
  },
];

export default function LinkedAppsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      {/* Add button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={32} color="black" />
      </TouchableOpacity>

      {/* App list */}
      <FlatList
        data={LINKED_APPS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <LinkedAppItem
            name={item.name}
            linkedAccount={item.linkedAccount}
            icon={item.icon}
          />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e3352',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  addButton: {
    alignSelf: 'center',
    backgroundColor: '#f5a623',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  list: {
    gap: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#3b4261',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 32,
    gap: 16,
  },
  modalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  modalBody: {
    color: '#aaa',
    fontSize: 15,
  },
  modalClose: {
    marginTop: 8,
    backgroundColor: '#f5a623',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalCloseText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
});
