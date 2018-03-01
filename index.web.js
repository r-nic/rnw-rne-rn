// index.web.js
import App from './src/App';
import React from 'react';
import { AppRegistry } from 'react-native';


function addFontFamily(iconFonts){
    let iconFontStyles = '';
    Object.keys(iconFonts).forEach(key => {
        iconFontStyles += `@font-face {
            src: url(${iconFonts[key]});
            font-family: ${key};
          }
          `;                   
    });
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = iconFontStyles;
    } else {
        style.appendChild(document.createTextNode(iconFontStyles));
    }
    document.head.appendChild(style);
}

// Fonts
import fontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import materialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import entypo from 'react-native-vector-icons/Fonts/Entypo.ttf';
import evilIcons from 'react-native-vector-icons/Fonts/EvilIcons.ttf';
import feather from 'react-native-vector-icons/Fonts/Feather.ttf';
import foundation from  'react-native-vector-icons/Fonts/Foundation.ttf';
import ionicons from  'react-native-vector-icons/Fonts/Ionicons.ttf';
import materialCommunityIcons from  'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
import octicons from  'react-native-vector-icons/Fonts/Octicons.ttf';
import simpleLineIcons from  'react-native-vector-icons/Fonts/SimpleLineIcons.ttf';
import zocial from  'react-native-vector-icons/Fonts/Zocial.ttf';

addFontFamily({'FontAwesome': fontAwesome, 
    'Material Icons': materialIcons,
    'Entypo': entypo, // entypo
    'EvilIcons': evilIcons, // evilicon
    'Feather': feather, // feather
    'Foundation': foundation,
    'Ionicons': ionicons,
    'Material Design Icons': materialCommunityIcons, // material-community
    'Octicons': octicons, // octicon
    'simple-line-icons': simpleLineIcons, // simple-line-icon,
    'zocial': zocial // zocial
});



// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
