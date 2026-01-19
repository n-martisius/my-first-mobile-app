import { useEffect, useState } from 'react';
import { loadGradient } from './storage';
import { GRADIENT_THEMES } from './themes';

import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { commonStyles } from './styles/commonStyles';
// Import router hook for navigation
import { useRouter } from 'expo-router';
// Import Pressable component
import { Pressable } from 'react-native';


export default function ApiDemoScreen() {
    // Router instance used to move between screens
  const router = useRouter();

// State variable for current theme
  const [theme, setTheme] = useState('ocean');
  // Load saved theme on component mount
  useEffect(() => {
    loadGradient().then(saved => {
      if (saved) setTheme(saved);
    });
  }, []);

    const [data, setData] = useState<any[]>([]);
    const[loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = async() => await fetch('https://jsonplaceholder.typicode.com/posts');
            const json = await response();
            const posts = await json.json();
            setData(posts);
        } catch (err) {
            setError('Failed to fetch posts');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <LinearGradient
                 colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
                  style={commonStyles.container}
                >
                <ActivityIndicator size="large"/>
            </LinearGradient>
        );
    }

    if (error) {
        return (
            <LinearGradient
                 colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
                  style={commonStyles.container}
                >
                <Text>{error}</Text>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient
                 colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
                  style={commonStyles.container}
                >
            <Text style={commonStyles.title}>Posts from API</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
  <Pressable
    style={commonStyles.postContainer}
    onPress={() => router.push(`/post/${item.id}`)}
  >
    <Text style={commonStyles.postTitle}>{item.title}</Text>
    <Text>{item.body}</Text>
  </Pressable>
)}

            />
            <Text style={commonStyles.link} onPress={() => router.push('/')}>Go Back</Text>
        </LinearGradient>
    );
}