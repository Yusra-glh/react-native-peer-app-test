import {View, Text} from 'react-native';
import React, {FC, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLocalStream, selectRemoteStream, setLocalStream, setType } from '../../store/features/Calls/CallsSlice';
import { RTCView } from 'react-native-webrtc';
import IconContainer from '../../components/IconContainer';
import CallEnd from '../../../assets/CallEnd';
import VideoOn from '../../../assets/VideoOn';
import VideoOff from '../../../assets/VideoOff';
import CameraSwitch from '../../../assets/CameraSwitch';
import MicOn from '../../../assets/MicOn';
import MicOff from '../../../assets/MicOff';


interface IVideoChatRoomProps {

}

const VideoChatRoom: FC<IVideoChatRoomProps> = ({}): React.JSX.Element => {
  const localStream = useSelector(selectLocalStream);
  const remoteStream = useSelector(selectRemoteStream);
  const [localMicOn, setlocalMicOn] = useState<Boolean>(true);
  const [localWebcamOn, setlocalWebcamOn] = useState<Boolean>(true);
  const dispatch=useDispatch()
  
  function switchCamera() {
    // localStream.getVideoTracks().forEach(track => {
    //   track._switchCamera();
    // });
  }

  function toggleCamera() {
    // localWebcamOn ? setlocalWebcamOn(false) : setlocalWebcamOn(true);
    // localStream.getVideoTracks().forEach(track => {
    //   localWebcamOn ? (track.enabled = false) : (track.enabled = true);
    // });
  }

  function toggleMic() {
    // localMicOn ? setlocalMicOn(false) : setlocalMicOn(true);
    // localStream.getAudioTracks().forEach(track => {
    //   localMicOn ? (track.enabled = false) : (track.enabled = true);
    // });
  }
  function leave() {
    //******************** TODO: Close Peer ********************* /
    //globalPeer.close();
    //useDispatch(setLocalStream(null));
    dispatch(setType('JOIN'));
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#050A0E', justifyContent: 'center', alignItems: 'center' }}>
    {remoteStream ? (
      <RTCView
        objectFit="cover"
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        streamURL={remoteStream.toURL()}
      />
    ) : (
      <Text style={{ color: '#FFF' }}>Waiting for remote stream...</Text>
    )}

    {localStream ? (
      <RTCView
        objectFit="cover"
        style={{ width: 150, height: 200, position: 'absolute', bottom: 100, right: 10, borderRadius: 8 }}
        streamURL={localStream.toURL()}
      />
    ) : (
      <Text style={{ color: '#FFF', position: 'absolute', bottom: 10, right: 10 }}>Waiting for local stream...</Text>
    )}
   
        <View
          style={{
            // marginVertical: 12,
            // flexDirection: 'row',
            // justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingHorizontal: 12, backgroundColor: '#050A0E'
          }}>
          <IconContainer
            backgroundColor={'red'}
            onPress={leave}
            Icon={() => {
              return <CallEnd height={26} width={26} fill="#FFF" />;
            }}
          />
          <IconContainer
            style={{
              borderWidth: 1.5,
              borderColor: '#2B3034',
            }}
            backgroundColor={!localMicOn ? '#fff' : 'transparent'}
            onPress={toggleMic}
            Icon={() => {
              return localMicOn ? (
                <MicOn height={24} width={24} fill="#FFF" />
              ) : (
                <MicOff height={28} width={28} fill="#1D2939" />
              );
            }}
          />
          <IconContainer
            style={{
              borderWidth: 1.5,
              borderColor: '#2B3034',
            }}
            backgroundColor={!localWebcamOn ? '#fff' : 'transparent'}
            onPress={toggleCamera}
            Icon={() => {
              return localWebcamOn ? (
                <VideoOn height={24} width={24} fill="#FFF" />
              ) : (
                <VideoOff height={36} width={36} fill="#1D2939" />
              );
            }}
          />
          <IconContainer
            style={{
              borderWidth: 1.5,
              borderColor: '#2B3034',
            }}
            backgroundColor={'transparent'}
            onPress={switchCamera}
            Icon={() => {
              return <CameraSwitch height={24} width={24} fill="#FFF" />;
            }}
          />
        </View>
      </View>
  );
};

export default VideoChatRoom;
