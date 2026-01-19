import AsyncStorage from '@react-native-async-storage/async-storage';
import { GRADIENT_THEMES } from './themes';

const GRADIENT_KEY = 'APP_GRADIENT';

export const saveGradient = async (
  theme: keyof typeof GRADIENT_THEMES
): Promise<void> => {
  await AsyncStorage.setItem(GRADIENT_KEY, theme);
};

export const loadGradient = async (): Promise<keyof typeof GRADIENT_THEMES | null> => {
  return (await AsyncStorage.getItem(GRADIENT_KEY)) as keyof typeof GRADIENT_THEMES | null;
};
