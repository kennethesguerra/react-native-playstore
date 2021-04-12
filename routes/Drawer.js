import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeStack } from './HomeStack';
import { AboutStack } from './AboutStack';
import { WebViewStack } from './WebViewStack';

export default function Drawer() {

  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="AboutStack" component={AboutStack} />
      <Drawer.Screen name="WebViewStack" component={WebViewStack} />
    </Drawer.Navigator>
  )
}
