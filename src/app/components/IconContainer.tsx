import { FC } from "react";
import { ColorValue, GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle } from "react-native";

interface IIconContainerProps {
    backgroundColor?:ColorValue,
    onPress:((event: GestureResponderEvent) => void) | undefined,
    Icon:React.ComponentType,
    style?:Object
} 

const IconContainer: FC<IIconContainerProps> =({backgroundColor, onPress, Icon, style})=> {                   

    return (
        <TouchableOpacity
        onPress={onPress}
        style={{
          ...style,
          backgroundColor: backgroundColor ? backgroundColor : 'transparent',
          borderRadius: 30,
          height: 60,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon />
      </TouchableOpacity>
    );
  }
  
  
  
  export default IconContainer;
  