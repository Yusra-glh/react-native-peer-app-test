import {AppDispatch} from '../../store';
import {setError, setLocalStream, setRemoteStream, setType} from './CallsSlice';
import {getDataApi} from '../../../services/user.service';
import {WebRTCSimple, CallEvents} from 'react-native-webrtc-simple';
import {generateConnectedId} from '../../../services/utils.service';

export const getData =
  (params: any): any =>
  async (dispatch: AppDispatch) => {
    try {
      const {data} = await getDataApi(params);
      console.log('-------- data');

      // dispatch(increment());
      //dispatch the action inside reducers to put the data
    } catch (error) {
      dispatch(setError('error ma fih chay'));
    }
  };

export const initPeer =
  (userId: string): any =>
  async (dispatch: AppDispatch) => {
    try {
      const id = generateConnectedId(userId);
      console.log('my user id ===== ', id);

      const configuration = {
        optional: {
          host: '192.168.1.135',
          secure: false,
          port: 3000,
          iceServers: [{ urls: "stun1.l.google.com:19302" }],
        },
        key: id,
      } as any;
      WebRTCSimple.start(configuration)
        .then(status => {
          if (!status) {
            dispatch(setError(id + ' Could not connect to peer server'));
          } else {
            const myStream = WebRTCSimple.getLocalStream();
            dispatch(setLocalStream(JSON.stringify(myStream)));
            WebRTCSimple.getSessionId(id => {
              console.log(' UserId: ', id);
            });
          }
        })
        .catch(error => {
          dispatch(
            setError(
              (id + ' Could not connect to peer server : ' + error) as string,
            ),
          );
        });
      WebRTCSimple.listenings.callEvents((type, userData) => {
        console.log('------ userData --------- ', userData);
        switch (type) {
          case 'START_CALL':
            break;
          case 'RECEIVED_CALL':
            break;
          case 'ACCEPT_CALL':
            break;
          case 'END_CALL':
            break;
          case 'MESSAGE':
            break;
          case 'START_GROUP_CALL':
            break;
          case 'RECEIVED_GROUP_CALL':
            break;
          case 'JOIN_GROUP_CALL':
            break;
          case 'LEAVE_GROUP_CALL':
            break;

          default:
            break;
        }
      });
      WebRTCSimple.listenings.getRemoteStream(remoteStream => {
        console.log(id + ' Remote stream-------------------- ', remoteStream);
        dispatch(setRemoteStream(remoteStream));
      });
    } catch (error) {
      dispatch(
        setError(('Could not connect to peer server : ' + error) as string),
      );
    }
  };

export const callOtherUser =
  (userId: string, myStream: object): any =>
  async (dispatch: AppDispatch) => {
    try {
      const id = generateConnectedId(userId);
    WebRTCSimple.events.call(id, myStream);
      //dispatch(setType('OUTGOING_CALL'));
    } catch (error) {
      console.log(userId + ' callOtherUser error-------------------- ', error);
      dispatch(
        setError(('Could not connect to peer server : ' + error) as string),
      );
    }
  };
