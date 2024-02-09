import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import CallAnswer from '../../../assets/CallAnswer';
import { useSelector } from 'react-redux';
import { selectOtherUserId } from '../../store/features/Calls/CallsSlice';


interface IIncomingCallScreenProps {

}

const IncomingCallScreen: FC<IIncomingCallScreenProps> = ({}): React.JSX.Element => {
    const otherUserId = useSelector(selectOtherUserId);
    const handleAnswer = () => {

    }
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'space-around',
      backgroundColor: '#050A0E',
    }}>
    <View
      style={{
        padding: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
      }}>
      <Text
        style={{
          fontSize: 36,
          marginTop: 12,
          color: '#ffff',
        }}>
        {otherUserId} is calling..
      </Text>
    </View>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={handleAnswer}
        style={{
          backgroundColor: 'green',
          borderRadius: 30,
          height: 60,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CallAnswer height={28} fill={'#fff'} />
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default IncomingCallScreen;
