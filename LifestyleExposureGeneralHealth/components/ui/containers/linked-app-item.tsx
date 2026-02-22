import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';

type LinkedAppItemProps = {
  name: string;
  linkedAccount: string;
  icon: { uri: string } | number; // supports require() or { uri: '' }
  style?: ViewStyle;
};

export function LinkedAppItem({ name, linkedAccount, icon, style }: LinkedAppItemProps) {
  return (
    <View style={[styles.card, style]}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.appName}>{name}</Text>
        <Text style={styles.accountLabel}>Linked Account:</Text>
        <Text style={styles.accountEmail}>{linkedAccount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3b4261',
    borderRadius: 16,
    padding: 16,
    gap: 16,
    // "floating" shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Android
  },
  icon: {
    width: 72,
    height: 72,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
    gap: 2,
  },
  appName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  accountLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  accountEmail: {
    color: 'white',
    fontSize: 14,
  },
});
