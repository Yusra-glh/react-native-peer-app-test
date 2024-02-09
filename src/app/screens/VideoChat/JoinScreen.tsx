import {
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
import React, {FC} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {   selectUserId, 
    selectConnectedUserId, 
    selectOtherUserId, 
    selectLocalStream, 
    selectRemoteStream, 
    selectGlobalPeer, 
    selectSocket, 
    selectIncomingCall, 
    selectOutgoingCall, 
    selectType, 
    selectError,  
    setOtherUserId,
    setUserId,
    switchUsers,} from '../../store/features/Calls/CallsSlice';
import { callOtherUser, initPeer } from '../../store/features/Calls/Calls.action';
import TextInputContainer from '../../components/TextInput';

interface IJoinScreenProps {
   
}

const JoinScreen: FC<IJoinScreenProps> = ({}): React.JSX.Element => {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const connectedUserId = useSelector(selectConnectedUserId);
    const otherUserId = useSelector(selectOtherUserId);
    const myStream = useSelector(selectLocalStream);


    const handleChangeUser = (text:string): any => {
        dispatch(setUserId(text));
      };
      const handleChangeOtherUser = (text:string): any => {
        dispatch(setOtherUserId(text));
      };
      const handleSwitch = () => {
        dispatch(switchUsers());
      };
      const connectUser = () => {
        //init socket connection from redux
        dispatch(initPeer(userId));
      };
      const callUser = () => {
       if(myStream)
        dispatch(callOtherUser(otherUserId ,myStream));
      }
    
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{
      flex: 1,
      backgroundColor: '#050A0E',
      justifyContent: 'center',
      paddingHorizontal: 42,
    }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <View
          style={{
            padding: 35,
            backgroundColor: '#1A1C22',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 14,
            width:"100%"
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#D0D4DD',
              
            }}>
            Enter your caller ID
          </Text>
          <TextInputContainer
            placeholder={'Enter Caller ID'}
            value={userId}
            handleChangeText={handleChangeUser}
            keyboardType={'default'}
          />
          <TouchableOpacity
            onPress={connectUser}
            style={{
              height: 50,
              backgroundColor: '#5568FE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              marginTop: 16,
              width:"100%"
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              Connect Now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSwitch}
            style={{
              height: 50,
              backgroundColor: '#5568FE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              marginTop: 16,
              width:"100%"
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              switch
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: '#D0D4DD',
          }}>
          Your caller ID : {connectedUserId}
        </Text>
        <View
          style={{
            backgroundColor: '#1A1C22',
            padding: 40,
            marginTop: 25,
            justifyContent: 'center',
            borderRadius: 14,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#D0D4DD',
            }}>
            Enter call name of another user
          </Text>
          <TextInputContainer
            placeholder={'Enter Caller ID'}
            value={otherUserId as string}
            handleChangeText={handleChangeOtherUser}
            keyboardType={'default'}
          />
          <TouchableOpacity
            onPress={callUser}
            style={{
              height: 50,
              backgroundColor: '#5568FE',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 12,
              marginTop: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
              }}>
              Call Now
            </Text>
          </TouchableOpacity>
        </View>
      </>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
  );
};

export default JoinScreen;
