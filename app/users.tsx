import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text } from 'react-native';

import { loadGradient } from './storage';
import { commonStyles } from './styles/commonStyles';
import { GRADIENT_THEMES } from './themes';

export default function UsersScreen() {
  const router = useRouter();
  const [theme, setTheme] = useState('ocean');
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGradient().then(t => t && setTheme(t));
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await res.json();
    setUsers(json);
    setLoading(false);
  };

  if (loading) {
    return (
        <LinearGradient
     colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
      style={commonStyles.container}
    >
        <ActivityIndicator size="large" />
      </LinearGradient>
    );
  }

  return (
      <LinearGradient
     colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
      style={commonStyles.container}
    >
      <Text style={commonStyles.title}>Users from API</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable style={commonStyles.postContainer}>
            <Text style={commonStyles.postTitle}>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.company.name}</Text>
          </Pressable>
        )}
      />

      <Pressable onPress={() => router.back()}>
        <Text style={commonStyles.link}>Go Back</Text>
      </Pressable>
    </LinearGradient>
  );
}
