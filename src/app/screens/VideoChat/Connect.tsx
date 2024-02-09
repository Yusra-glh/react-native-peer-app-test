import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {selectType} from '../../store/features/Calls/CallsSlice';
import JoinScreen from './JoinScreen';
import IncomingCallScreen from './IncomingCallScreen';
import OutgoingCallScreen from './OutgoingCallScreen';
import VideoChatRoom from './VideoChatRoom';

interface IConnectProps {}

const Connect: FC<IConnectProps> = ({}): React.JSX.Element => {
  const type = useSelector(selectType);

  switch (type) {
    case 'JOIN':
      return <JoinScreen />;
    case 'INCOMING_CALL':
      return <IncomingCallScreen />;
    case 'OUTGOING_CALL':
      return <OutgoingCallScreen />;
    case 'WEBRTC_ROOM':
      return <VideoChatRoom />;
    default:
      return <></>;
  }
};

export default Connect;
