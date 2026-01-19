import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import { loadGradient, saveGradient } from '../storage';
import { commonStyles } from '../styles/commonStyles';
import { GRADIENT_THEMES } from '../themes';

type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<any>;
};

export default function SettingsScreen({ navigation }: SettingsScreenProps) {

    
  const changeTheme = async (theme: string): Promise<void> => {
    await saveGradient(theme);
  };
    // State variable for current theme
    const [theme, setTheme] = useState('ocean');
    // Load saved theme on component mount
    useEffect(() => {
      loadGradient().then(saved => {
        if (saved) setTheme(saved);
      });
    }, []);


  return (
    <LinearGradient
     colors={GRADIENT_THEMES[theme] as [string, string, ...string[]]}
      style={commonStyles.container}
    >
      <Text style={commonStyles.title}>Choose Theme</Text>

    <Button title="Ocean" onPress={async () => {
      await changeTheme('ocean');
      setTheme('ocean');
    }} />
    <Button title="Sunset" onPress={async () => {
      await changeTheme('sunset');
      setTheme('sunset');
    }} />
    <Button title="Forest" onPress={async () => {
      await changeTheme('forest');
      setTheme('forest');
    }} />
    <Button title="Night" onPress={async () => {
      await changeTheme('night');
      setTheme('night');
    }} />
    </LinearGradient>
  );
}
