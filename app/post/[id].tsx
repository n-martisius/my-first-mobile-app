import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';

import { loadGradient } from '../storage';
import { commonStyles } from '../styles/commonStyles';
import { GRADIENT_THEMES } from '../themes';

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [theme, setTheme] = useState('ocean');
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadGradient().then(t => t && setTheme(t));
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const postJson = await postRes.json();

      const commentsRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const commentsJson = await commentsRes.json();

      setPost(postJson);
      setComments(commentsJson);
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
        <ActivityIndicator size="large" />
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
     colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
      style={commonStyles.container}
    >
      <Text style={commonStyles.title}>{post.title}</Text>
      <Text style={commonStyles.text}>{post.body}</Text>

      <Text style={commonStyles.subtitle}>Comments</Text>

      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={commonStyles.comment}>
            <Text style={commonStyles.commentAuthor}>{item.email}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />

      <Pressable onPress={() => router.back()}>
        <Text style={commonStyles.link}>Go Back</Text>
      </Pressable>
    </LinearGradient>
  );
}
