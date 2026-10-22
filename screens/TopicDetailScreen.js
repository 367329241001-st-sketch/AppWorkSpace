import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { globalStyles, COLORS } from '../styles/theme';

export default function TopicDetailScreen({ route }) {
  // รับค่า Object 'item' ที่ส่งมาจากหน้าก่อนหน้าโดยตรง
  const { item } = route.params || {};

  if (!item) {
    return (
      <View style={globalStyles.centerContent}>
        <Text>ไม่พบข้อมูลรายการ</Text>
      </View>
    );
  }

  // เช็คว่าเป็น item จาก Data 3 (Co-Working Space) หรือ Data 2 (RN Lesson)
  const imageUrl = item.imageUrl || item.image;
  const isWorkspace = !!(item.zone || item.openingHours || item.price || item.facilities);
  const displayTitle = item.title || item.name || item.topic || 'รายละเอียด';
  const displayCategory = item.category || (isWorkspace ? 'Co-Working Space' : 'บทเรียน React Native');

  return (
    <ScrollView style={globalStyles.container}>
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.detailImg} />
      )}

      <View style={{ padding: 16 }}>
        <View style={globalStyles.badge}>
          <Text style={globalStyles.badgeText}>{displayCategory}</Text>
        </View>

        <Text style={[globalStyles.titleText, { fontSize: 22, marginTop: 10 }]}>{displayTitle}</Text>

        {isWorkspace ? (
          <>
            {item.zone && <Text style={styles.zoneText}>📍 ย่าน/โซน: {item.zone}</Text>}
            
            {/* Meta Info Grid */}
            {(item.price || item.wifiSpeed || item.openingHours) && (
              <View style={styles.infoGrid}>
                {item.price && (
                  <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>ราคา</Text>
                    <Text style={styles.infoValue}>{item.price}</Text>
                  </View>
                )}
                {item.wifiSpeed && (
                  <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>ความเร็ว Wi-Fi</Text>
                    <Text style={styles.infoValue}>{item.wifiSpeed}</Text>
                  </View>
                )}
                {item.openingHours && (
                  <View style={styles.infoBox}>
                    <Text style={styles.infoLabel}>เวลาเปิด-ปิด</Text>
                    <Text style={styles.infoValue}>{item.openingHours}</Text>
                  </View>
                )}
              </View>
            )}

            {(item.description || item.summary) && (
              <>
                <Text style={styles.sectionHeader}>รายละเอียดพื้นที่</Text>
                <Text style={styles.bodyText}>{item.description || item.summary}</Text>
              </>
            )}

            {item.facilities && Array.isArray(item.facilities) && (
              <>
                <Text style={styles.sectionHeader}>สิ่งอำนวยความสะดวก</Text>
                <View style={styles.tagWrapper}>
                  {item.facilities.map((fac, idx) => (
                    <View key={idx} style={styles.tagChip}>
                      <Text style={styles.tagText}>✓ {fac}</Text>
                    </View>
                  ))}
                </View>
              </>
            )}
          </>
        ) : (
          /* รายละเอียดบทเรียน RN (Data 2) */
          <>
            {(item.summary || item.concept) && (
              <>
                <Text style={[styles.sectionHeader, { marginTop: 16 }]}>คำอธิบายบทเรียน</Text>
                <Text style={styles.bodyText}>{item.summary || item.concept}</Text>
              </>
            )}
            {item.code_example && (
              <>
                <Text style={styles.sectionHeader}>ตัวอย่างโค้ด</Text>
                <View style={styles.codeBlock}>
                  <Text style={styles.codeText}>{item.code_example}</Text>
                </View>
              </>
            )}
            <View style={[globalStyles.card, { backgroundColor: '#EFF6FF', marginTop: 20 }]}>
              <Text style={{ fontWeight: 'bold', color: COLORS.primary, marginBottom: 4 }}>💡 คำแนะนำการเรียนรู้:</Text>
              <Text style={{ color: COLORS.textMain, fontSize: 13 }}>
                สามารถลองปฏิบัติตามโค้ดตัวอย่างในเอกสารประกอบการสอนวิชา React Native หัวข้อนี้ได้บน Snack Expo
              </Text>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailImg: {
    width: '100%',
    height: 220,
  },
  zoneText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 4,
  },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    backgroundColor: COLORS.cardBg,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoBox: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontSize: 11,
    color: COLORS.textSub,
  },
  infoValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginTop: 2,
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginTop: 14,
    marginBottom: 6,
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.textMain,
    lineHeight: 22,
  },
  codeBlock: {
    backgroundColor: '#1E293B',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  codeText: {
    color: '#38BDF8',
    fontFamily: 'monospace',
    fontSize: 13,
  },
  tagWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tagChip: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    color: '#15803D',
    fontWeight: '600',
  }
});
