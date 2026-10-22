// screens/HowToScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { globalStyles, COLORS } from '../styles/theme';

export default function HowToScreen() {
  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={globalStyles.titleText}>คู่มือการใช้งาน WorkSpace Hunter</Text>
      
      <View style={globalStyles.card}>
        <Text style={styles.stepTitle}>1. เมนูหลัก (Main Tabs)</Text>
        <Text style={globalStyles.subtitleText}>
          • หน้าหลัก: แสดง Banner ไฮไลต์ และเมนูด่วนไปหน้าต่างๆ{"\n"}
          • ผู้พัฒนา: ตรวจสอบข้อมูลสมาชิกกลุ่มและหน้าที่ความรับผิดชอบ (Data 1){"\n"}
          • บทเรียน RN: อ่านสรุป 24 บทเรียนวิชา React Native (Data 2){"\n"}
          • ค้นหา Space: สำรวจ Co-working space ที่ดึงจาก GitHub JSON (Data 3)
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={styles.stepTitle}>2. การเปิดดูรายละเอียด (Stack Navigation)</Text>
        <Text style={globalStyles.subtitleText}>
          กดที่การ์ดบทเรียน หรือการ์ดสถานที่ในหน้า Explore เพื่อเปิดหน้า TopicDetailScreen โดยแอปจะส่ง Object ข้อมูลทั้งก้อนไปแสดงผลทันทีโดยไม่ต้องดึงข้อมูลซ้ำ
        </Text>
      </View>

      <View style={globalStyles.card}>
        <Text style={styles.stepTitle}>3. เมนูด้านข้าง (Drawer Navigation)</Text>
        <Text style={globalStyles.subtitleText}>
          สามารถปัดหน้าจอจากขอบซ้าย หรือกดปุ่ม Hamburger Icon เพื่อเปิดเมนูด้านข้าง สลับไปหน้า How To และ About Project ได้
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 6,
  }
});