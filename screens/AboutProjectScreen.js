// screens/AboutProjectScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { globalStyles, COLORS } from '../styles/theme';

export default function AboutProjectScreen() {
  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={{ padding: 16 }}>
      <View style={globalStyles.card}>
        <Text style={[globalStyles.titleText, { color: COLORS.primary }]}>Smart Content Hub Project</Text>
        <Text style={styles.desc}>
          แอปพลิเคชันนี้พัฒนาขึ้นเพื่อส่งงานโปรเจกต์กลุ่มระดับปริญญาตรี รายวิชาการพัฒนาแอปพลิเคชันด้วย React Native
        </Text>
        <View style={styles.divider} />
        <Text style={styles.infoLabel}>วัตถุประสงค์หลัก:</Text>
        <Text style={globalStyles.subtitleText}>
          1. ประยุกต์ใช้ Navigation ทั้ง 3 รูปแบบ (Drawer, Bottom Tabs, Stack){"\n"}
          2. จัดการชุดข้อมูล 3 รูปแบบ (Local Code, Local Import JS, Online GitHub Raw JSON){"\n"}
          3. ปฏิบัติตามหลักการ Separation of Concerns (SoC) แยกไฟล์เป็นสัดส่วน
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontSize: 14,
    color: COLORS.textMain,
    lineHeight: 20,
    marginTop: 6,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 12,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: 4,
  }
});