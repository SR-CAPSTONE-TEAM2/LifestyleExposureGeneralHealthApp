import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { supabase } from './lib/supabase'

type Instrument = {
  id: number
  name: string
}

export default function App() {
  const [instruments, setInstruments] = useState<Instrument[]>([])

  useEffect(() => {
    fetchInstruments()
  }, [])

  const fetchInstruments = async () => {
    const { data, error } = await supabase
      .from('instruments')
      .select('*')

    if (error) {
      console.error('Supabase error:', error.message)
      return
    }

    setInstruments(data ?? [])
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={instruments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
  },
})
