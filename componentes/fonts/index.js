// src/useLoadFonts.js
import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

// Função para carregar fontes
const loadFonts = async () => {
  try {
    await Font.loadAsync({
      'Tungsten-Bold': require('../../assets/fonts/Tungsten-Bold.ttf'),
      'Valorant-Font': require('../../assets/fonts/Valorant-Font.ttf'),
      'Dinnextw1': require('../../assets/fonts/dinnextw1g_lightitalic.otf'),
      'Dinnextw1-italic': require('../../assets/fonts/dinnextw1g_mediumitalic.otf'),
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
