import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function CategoryScreen({ route, navigation }) {
  const { category } = route.params;

  const renderTopic = ({ item }) => (
    <TouchableOpacity
      style={styles.topicCard}
      onPress={() => navigation.navigate('AdviceDetail', { topic: item })}
    >
      <View style={styles.topicContent}>
        <Text style={styles.topicTitle}>{item.title}</Text>
        <Text style={styles.topicQuestion} numberOfLines={2}>
          {item.question}
        </Text>
      </View>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerIcon}>{category.icon}</Text>
        <Text style={styles.headerDescription}>{category.description}</Text>
      </View>

      <FlatList
        data={category.topics}
        renderItem={renderTopic}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Сэдэв байхгүй байна</Text>
        }
      />
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
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  headerDescription: {
    fontSize: 14,
    color: '#a0aec0',
    textAlign: 'center',
  },
  listContainer: {
    padding: 15,
  },
  topicCard: {
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
  topicContent: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1a365d',
    marginBottom: 6,
  },
  topicQuestion: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  arrow: {
    fontSize: 24,
    color: '#ccc',
    marginLeft: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
});
