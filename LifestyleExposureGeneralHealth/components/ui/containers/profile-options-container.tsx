import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Individual row variants
type BaseRowProps = { label: string };

type NavigationRowProps = BaseRowProps & {
  type: 'navigation';
  onPress: () => void;
};

type ControlRowProps = BaseRowProps & {
  type: 'control';
  control: React.ReactNode;
};

type RowProps = NavigationRowProps | ControlRowProps;

export function OptionsRow(props: RowProps) {
  const content = (
    <View style={styles.row}>
      <Text style={styles.label}>{props.label}</Text>
      {props.type === 'navigation' ? (
        <Ionicons name="chevron-forward" size={18} color="white" />
      ) : (
        props.control
      )}
    </View>
  );

  if (props.type === 'navigation') {
    return (
      <TouchableOpacity onPress={props.onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}

// The card wrapper
type ProfileOptionsContainerProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function ProfileOptionsContainer({ children, style }: ProfileOptionsContainerProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#3b4261',   // adjust to match your theme
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});
