import { FC } from "react";
import { ColorValue, GestureResponderEvent, KeyboardTypeOptions, StyleProp, TextInput, TouchableOpacity, View, ViewStyle } from "react-native";

interface ITextInputContainerProps {
    placeholder?:string,
    handleChangeText:((text: string) => void) | undefined,
    value:string,
    keyboardType?:KeyboardTypeOptions
} 

const TextInputContainer: FC<ITextInputContainerProps> =({placeholder, value, handleChangeText, keyboardType})=> {                   

    return (
        <View
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#202427',
          borderRadius: 12,
          marginVertical: 12,
        }}>
        <TextInput
          style={{
            margin: 8,
            padding: 8,
            width: '90%',
            textAlign: 'center',
            fontSize: 16,
            color: '#FFFFFF',
          }}
          multiline={true}
          numberOfLines={1}
          cursorColor={'#5568FE'}
          placeholder={placeholder}
          placeholderTextColor={'#9A9FA5'}
          onChangeText={handleChangeText}
          value={value}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
  
  
  
  export default TextInputContainer;
  