import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles, COLORS } from '../styles/theme';
import { rnTopics } from '../data/react_native_knowledge_24_topics';

export default function HomeScreen({ navigation }) {
  // ดึงตัวอย่างข้อมูล Data 2
  const featuredTopic = rnTopics[12]; // RN Navigation

  return (
    <ScrollView style={globalStyles.container}>
      {/* 1. Banner */}
      <View style={styles.bannerContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800' }} 
          style={styles.bannerImage}
        />
        <View style={styles.bannerOverlay}>
          <Text style={styles.bannerTitle}>WorkSpace Hunter</Text>
          <Text style={styles.bannerSub}>ค้นหา Co-Working Space & คาเฟ่นั่งเขียนโค้ดสำหรับสาย Dev</Text>
        </View>
      </View>

      {/* 2. Quick Menu */}
      <Text style={styles.sectionHeader}>เมนูด่วน (Quick Access)</Text>
      <View style={styles.quickMenuGrid}>
        <TouchableOpacity style={styles.quickMenuItem} onPress={() => navigation.navigate('Explore')}>
          <View style={[styles.iconCircle, { backgroundColor: '#E0F2FE' }]}>
            <Ionicons name="compass" size={24} color={COLORS.primary} />
          </View>
          <Text style={styles.quickMenuText}>ค้นหา Space</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickMenuItem} onPress={() => navigation.navigate('RNKnowledge')}>
          <View style={[styles.iconCircle, { backgroundColor: '#FEF3C7' }]}>
            <Ionicons name="journal" size={24} color="#D97706" />
          </View>
          <Text style={styles.quickMenuText}>24 บทเรียน RN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickMenuItem} onPress={() => navigation.navigate('Teamwork')}>
          <View style={[styles.iconCircle, { backgroundColor: '#DCFCE7' }]}>
            <Ionicons name="people" size={24} color="#15803D" />
          </View>
          <Text style={styles.quickMenuText}>ทีมผู้พัฒนา</Text>
        </TouchableOpacity>
      </View>

      {/* 3. Real Data Featured Cards */}
      <Text style={styles.sectionHeader}>ไฮไลต์แนะนำประจำวัน</Text>
      
      {/* Card 1: Data 2 Sample */}
      <TouchableOpacity 
        style={globalStyles.card}
        onPress={() => navigation.navigate('TopicDetail', { item: featuredTopic })}
      >
        <View style={globalStyles.badge}>
          <Text style={globalStyles.badgeText}>บทเรียน RN ไฮไลต์</Text>
        </View>
        <Text style={[globalStyles.titleText, { marginTop: 8 }]}>{featuredTopic.title}</Text>
        <Text style={globalStyles.subtitleText}>{featuredTopic.summary}</Text>
      </TouchableOpacity>

      {/* Card 2: Quick Explore Promo */}
      <View style={[globalStyles.card, { backgroundColor: COLORS.primary }]}>
        <Text style={[globalStyles.titleText, { color: '#FFF' }]}>พร้อมออกไปปั่นโค้ดแล้วหรือยัง?</Text>
        <Text style={{ color: '#E0F2FE', marginBottom: 12 }}>
          เรารวบรวม Co-Working Space กว่า 8 แห่งที่มี Wi-Fi แรงและปลั๊กไฟพร้อมใช้งาน
        </Text>
        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => navigation.navigate('Explore')}
        >
          <Text style={styles.actionBtnText}>ดูสถานที่ทั้งหมด</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    height: 180,
    position: 'relative',
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: 16,
    justifyContent: 'flex-end',
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  bannerSub: {
    fontSize: 13,
    color: '#E2E8F0',
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginHorizontal: 16,
    marginVertical: 10,
  },
  quickMenuGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  quickMenuItem: {
    alignItems: 'center',
    width: '30%',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  quickMenuText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.textMain,
  },
  actionBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionBtnText: {
    color: COLORS.textMain,
    fontWeight: 'bold',
  }
});
