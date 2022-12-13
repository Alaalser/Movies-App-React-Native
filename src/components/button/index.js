import {Pressable, Text} from 'react-native';

const Button = ({buttonStyle, textStyle, onPress, children}) => {
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};

export default Button;
