import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';


function Button({ title, containerStyle, textStyle, icon, ...rest }: any) {
  return (
    <TouchableOpacity style={containerStyle} {...rest}>
      <Text style={textStyle}>
        {title}
      </Text>
      {icon && <Image source={icon}/>}
    </TouchableOpacity>
  );
}



export { Button }