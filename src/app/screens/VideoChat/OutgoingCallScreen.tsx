import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import { selectOtherUserId } from '../../store/features/Calls/CallsSlice';
import CallEnd from '../../../assets/CallEnd';



interface IOutgoingCallScreenProps {
   

}

const OutgoingCallScreen: FC<IOutgoingCallScreenProps> = ({}): React.JSX.Element => {
    const otherUserId = useSelector(selectOtherUserId);
    const handleEndCall = () => {

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
          fontSize: 16,
          color: '#D0D4DD',
        }}>
        Calling to...
      </Text>

      <Text
        style={{
          fontSize: 36,
          marginTop: 12,
          color: '#ffff',
          letterSpacing: 6,
        }}>
        {otherUserId}
      </Text>
    </View>
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={handleEndCall}
        style={{
          backgroundColor: '#FF5D5D',
          borderRadius: 30,
          height: 60,
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CallEnd width={50} height={12} />
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default OutgoingCallScreen;
