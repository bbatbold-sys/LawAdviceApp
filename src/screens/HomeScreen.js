import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { legalCategories } from '../data/legalData';

export default function HomeScreen({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => navigation.navigate('Category', { category: item })}
    >
      <Text style={styles.categoryIcon}>{item.icon}</Text>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <Text style={styles.categoryDescription}>{item.description}</Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Хууль Зөвлөгөө</Text>
        <Text style={styles.subtitleText}>
          Түгээмэл сэдвүүдээр хуулийн ерөнхий мэдээлэл авах
        </Text>
      </View>

      <FlatList
        data={legalCategories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity
        style={styles.disclaimerButton}
        onPress={() => navigation.navigate('Disclaimer')}
      >
        <Text style={styles.disclaimerButtonText}>
          Хуулийн Анхааруулга Унших
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#1a365d',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  subtitleText: {
    fontSize: 14,
    color: '#a0aec0',
  },
  listContainer: {
    padding: 15,
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 36,
    marginRight: 15,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a365d',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 13,
    color: '#666',
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
  },
  disclaimerButton: {
    margin: 15,
    padding: 15,
    backgroundColor: '#e53e3e',
    borderRadius: 8,
    alignItems: 'center',
  },
  disclaimerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
