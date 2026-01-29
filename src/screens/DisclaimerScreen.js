import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { disclaimer } from '../data/legalData';

export default function DisclaimerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>⚠️</Text>
        </View>

        <View style={styles.disclaimerCard}>
          <Text style={styles.disclaimerText}>{disclaimer}</Text>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Хуулийн Тусламж Хэрэгтэй юу?</Text>
          <Text style={styles.contactText}>
            Хэрэв танд хуулийн тусламж хэрэгтэй бол дараах эх сурвалжуудыг авч үзнэ үү:
          </Text>
          <View style={styles.resourceList}>
            <Text style={styles.resourceItem}>
              • Хуульчдын холбооны лавлагааны үйлчилгээ
            </Text>
            <Text style={styles.resourceItem}>
              • Бага орлоготой иргэдэд зориулсан хуулийн туслалцааны байгууллагууд
            </Text>
            <Text style={styles.resourceItem}>
              • Хууль зүйн сургуулийн клиникүүд
            </Text>
            <Text style={styles.resourceItem}>
              • Үнэ төлбөргүй хуулийн үйлчилгээ
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 15,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  icon: {
    fontSize: 64,
  },
  disclaimerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#e53e3e',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  contactCard: {
    backgroundColor: '#ebf8ff',
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#3182ce',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c5282',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#2c5282',
    marginBottom: 15,
  },
  resourceList: {
    marginLeft: 5,
  },
  resourceItem: {
    fontSize: 14,
    color: '#2c5282',
    lineHeight: 24,
  },
});
