import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet, Button } from 'react-native';

const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/367329241001-st-sketch/workspace_explore.json/refs/heads/main/workspace_explore.json';

export default function ExploreScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(GITHUB_RAW_URL);
      if (!response.ok) {
        throw new Error('ไม่สามารถดึงข้อมูลจาก GitHub ได้ (HTTP ' + response.status + ')');
      }
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message || 'เกิดข้อผิดพลาดในการโหลดข้อมูล');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 1. แสดงสถานะ Loading
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0066cc" />
        <Text style={styles.statusText}>กำลังโหลดข้อมูลสถานที่...</Text>
      </View>
    );
  }

  // 2. แสดงสถานะ Error พร้อมปุ่มกดลองใหม่
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>⚠️ {error}</Text>
        <Button title="ลองใหม่อีกครั้ง" onPress={fetchData} color="#0066cc" />
      </View>
    );
  }

  // 3. แสดงผล List / Detail
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => (item.id !== undefined && item.id !== null ? item.id.toString() : index.toString())}
        renderItem={({ item }) => {
          const imgUri = item.image || item.imageUrl;
          const displayTitle = item.name || item.title || item.topic;
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('TopicDetail', { item })}
            >
              {imgUri ? (
                <Image source={{ uri: imgUri }} style={styles.image} />
              ) : null}
              <Text style={styles.title}>{displayTitle}</Text>
              <Text style={styles.summary} numberOfLines={2}>{item.summary || item.description}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f4f4f6' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  statusText: { marginTop: 10, color: '#555', fontSize: 14 },
  errorText: { color: '#d9534f', fontSize: 16, marginBottom: 15, textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 12, borderRadius: 8, elevation: 2 },
  image: { width: '100%', height: 160, borderRadius: 6, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  summary: { fontSize: 14, color: '#666', marginTop: 4 }
});
