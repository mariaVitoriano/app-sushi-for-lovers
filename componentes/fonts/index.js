// src/useLoadFonts.js
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

// Função para carregar fontes
const loadFonts = async () => {
  try {
    await Font.loadAsync({
      'Tungsten-Bold': require('../../assets/fonts/Tungsten-Bold.ttf'),
      'japona': require('../../assets/fonts/AsiaSushiBold-gx3PP.otf'),
    });
  } catch (error) {
    console.error('Erro ao carregar fontes:', error);
  }
};

// Hook personalizado para carregar fontes
export const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  return fontsLoaded;
};
