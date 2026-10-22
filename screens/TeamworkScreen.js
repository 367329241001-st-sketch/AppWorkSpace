// screens/TeamworkScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { globalStyles, COLORS } from '../styles/theme';

// DATA 1: อัปเดตรายชื่อสมาชิกกลุ่มจริง
const teamMembers = [
  {
    id: 'm1',
    name: 'นาย กรวิชญ์ เชี่ยวชาญ',
    studentId: '66010001',
    role: 'Team Lead & Lead Developer',
    duties: 'วางโครงสร้าง Navigation (SoC), เชื่อมต่อ GitHub JSON API, ทำหน้า Detail Screen',
    avatar: 'https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/848235800_4138725996432998_7231392047336980412_n.jpg?stp=dst-jpg_tt6&cstp=mx527x527&ctp=s527x527&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tL3Em7p-tYkQ7kNvwGNf0-U&_nc_oc=Ado66nXoZa67wRX6QpXOBxi9aBxcx-ckoO2PgPSb85h85fvIuKLopxQYclga0F6FHsoHbHeAhImID6N_5ncHCpTz&_nc_zt=23&_nc_ht=scontent.fbkk31-1.fna&_nc_gid=8DMBLJKYEsIGxGbXaK-6nQ&_nc_ss=7b2a8&oh=00_AQPso_HZcp8OT9Cs6yTAcBr-gSfBYTMfXitl1Di1N818Ew&oe=6ADBE7F0'
  },
  {
    id: 'm2',
    name: 'นางสาว ศศิ ศศิพิชดา',
    studentId: '66010002',
    role: 'UI/UX & Frontend Dev',
    duties: 'ออกแบบ ธีมสี/Layout (Theme.js), ทำหน้า Home Screen, Quick Menu, Banner',
    avatar: 'https://scontent.fbkk8-1.fna.fbcdn.net/v/t39.30808-1/645090050_1931396004250325_6206129567834579182_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x2048&ctp=s200x200&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_ohc=4mL0Gnec42UQ7kNvwEUiZJB&_nc_oc=AdqHZrcHFcICMIvUv6DFjLghvAeggRX_ag_tI4a6uCSCHmzFthBoSj3OgXkmR6oD_oAe451_G1BBgzD8dehSB77n&_nc_zt=24&_nc_ht=scontent.fbkk8-1.fna&_nc_gid=sj7HWOuDt3_sFaPw7bnhwg&_nc_ss=7b2a8&oh=00_AQPaWGQKfuz1cJEtgKsnertYWC9m_fcsYy7yZHW7W7lwTQ&oe=6ADBEE44'
  },
  {
    id: 'm3',
    name: 'นาย เดชาวัต ภู่เจริญ',
    studentId: '66010003',
    role: 'Data & Testing Specialist',
    duties: 'จัดทำ GitHub Raw JSON, รวบรวม 24 บทเรียน RN, ทดสอบ APK บน Android Device Real',
    avatar: 'https://scontent.fbkk31-1.fna.fbcdn.net/v/t39.30808-6/474619593_1802677160484217_5895722305644536572_n.jpg?stp=dst-jpg_tt6&cstp=mx953x960&ctp=s953x960&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=voY-wT14tKQQ7kNvwEgkVNM&_nc_oc=Adq0a1AU1auQXDzXrpE73OwoRPTgDl9mkeHl214dxkCgBPiZzzj6lHVkMlB2v0MzfniCthYvRhqRGxaoIBCMEpvo&_nc_zt=23&_nc_ht=scontent.fbkk31-1.fna&_nc_gid=-Tua7se3kMG1QIHZivgHVw&_nc_ss=7b2a8&oh=00_AQOGTO9i3oBUn1TJjeR8NjQk10kdaj9qFi2LXuW9hJimPw&oe=6ADBF9DA'
  }
];

export default function TeamworkScreen() {
  const renderMember = ({ item }) => (
    <View style={globalStyles.card}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.profileText}>
          <Text style={globalStyles.titleText}>{item.name}</Text>
          <Text style={{ color: COLORS.primary, fontWeight: '600' }}>รหัสนักศึกษา: {item.studentId}</Text>
          <Text style={styles.roleBadge}>{item.role}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <Text style={styles.dutyTitle}>หน้าที่ความรับผิดชอบ:</Text>
      <Text style={globalStyles.subtitleText}>{item.duties}</Text>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>ทีมผู้พัฒนาโปรเจกต์ (DATA 1)</Text>
        <Text style={styles.headerSub}>วิชาการพัฒนาแอปพลิเคชันด้วย React Native</Text>
      </View>
      <FlatList
        data={teamMembers}
        keyExtractor={(item) => item.id}
        renderItem={renderMember}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    backgroundColor: COLORS.cardBg,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  headerSub: {
    fontSize: 13,
    color: COLORS.textSub,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
  },
  profileText: {
    flex: 1,
  },
  roleBadge: {
    fontSize: 12,
    color: '#D97706',
    fontWeight: 'bold',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 10,
  },
  dutyTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: 2,
  }
});