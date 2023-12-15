import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


function Button({ title, containerStyle, textStyle, ...rest }: any) {
  return (
    <TouchableOpacity style={containerStyle} {...rest}>
      <Text style={textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}



export { Button }