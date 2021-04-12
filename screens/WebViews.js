import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default function WebViews() {
  return <WebView source={{ uri: 'https://t3.hcx.com.ph' }} />;
}