import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function AdviceDetailScreen({ route }) {
  const { topic } = route.params;

  // Simple markdown-like rendering for bold text
  const renderText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <Text key={index} style={styles.boldText}>
            {part.slice(2, -2)}
          </Text>
        );
      }
      return <Text key={index}>{part}</Text>;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.questionCard}>
          <Text style={styles.questionLabel}>Асуулт</Text>
          <Text style={styles.questionText}>{topic.question}</Text>
        </View>

        <View style={styles.answerCard}>
          <Text style={styles.answerLabel}>Ерөнхий Мэдээлэл</Text>
          <Text style={styles.answerText}>{renderText(topic.answer)}</Text>
        </View>

        <View style={styles.warningCard}>
          <Text style={styles.warningTitle}>Чухал Анхааруулга</Text>
          <Text style={styles.warningText}>
            Энэ мэдээлэл нь зөвхөн боловсролын зорилгоор өгөгдсөн бөгөөд
            хуулийн зөвлөгөө биш юм. Хууль тогтоомж нь харьяаллаас хамаарч
            өөр өөр байдаг ба цаг хугацааны явцад өөрчлөгддөг. Таны тодорхой
            нөхцөл байдлын талаар зөвлөгөө авахын тулд мэргэшсэн хуульчтай
            зөвлөлдөнө үү.
          </Text>
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
  questionCard: {
    backgroundColor: '#1a365d',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  questionLabel: {
    fontSize: 12,
    color: '#a0aec0',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    lineHeight: 28,
  },
  answerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  answerLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  answerText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 24,
  },
  boldText: {
    fontWeight: '700',
    color: '#1a365d',
  },
  warningCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
  },
  warningTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400e',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 13,
    color: '#78350f',
    lineHeight: 20,
  },
});
