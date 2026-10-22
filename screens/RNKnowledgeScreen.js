// screens/RNKnowledgeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles, COLORS } from '../styles/theme';
import { rnTopics } from '../data/react_native_knowledge_24_topics'; // Import DATA 2

export default function RNKnowledgeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={globalStyles.card}
      onPress={() => navigation.navigate('TopicDetail', { item })} // ส่ง Object ทั้งก้อน
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={globalStyles.badge}>
          <Text style={globalStyles.badgeText}>{item.category}</Text>
        </View>
      </View>
      <Text style={[globalStyles.titleText, { marginTop: 8 }]}>{item.title}</Text>
      <Text style={globalStyles.subtitleText} numberOfLines={2}>{item.summary}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      <View style={styles.topInfo}>
        <Text style={styles.topTitle}>คลังบทเรียน React Native (DATA 2)</Text>
        <Text style={styles.topSub}>รวม 24 หัวข้อสำหรับการเรียนรู้และอ้างอิง</Text>
      </View>
      <FlatList
        data={rnTopics}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topInfo: {
    backgroundColor: COLORS.cardBg,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  topTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  topSub: {
    fontSize: 12,
    color: COLORS.textSub,
  }
});