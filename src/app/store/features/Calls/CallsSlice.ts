import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export interface CallsState {
  userId: string;
  connectedUserId: string;
  otherUserId: string;
  localStream: object | undefined;
  remoteStream: object | undefined;
  globalPeer: object | undefined;
  socket: object | undefined;
  incomingCall: object | undefined;
  outgoingCall: object | undefined;
  type: string;
  error: string;
}

const initialState: CallsState = {
  userId: 'yosra',
  connectedUserId: 'yosra',
  otherUserId: 'mehrez',
  localStream: undefined,
  remoteStream: undefined,
  globalPeer: undefined,
  socket: undefined,
  incomingCall: undefined,
  outgoingCall: undefined,
  type: 'JOIN',
  error: '',
};

export const CallsSlice = createSlice({
  name: 'Calls',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearCall: (state, action) => {
      return {
        ...state,
        userId: 'yosra',
        connectedUserId: 'yosra',
        otherUserId: 'mehrez',
        localStream: undefined,
        remoteStream: undefined,
        globalPeer: undefined,
        socket: undefined,
        incomingCall: undefined,
        outgoingCall: undefined,
        type: 'JOIN',
        error: '',
      };
    },
    setIncomingCall: (state, action) => {
      return {
        ...state,
        incomingCall: action.payload,
        type: 'INCOMING_CALL',
      };
    },
    setRemoteStream: (state, action) => {
      return {
        ...state,
        remoteStream: action.payload,
      };
    },
    switchUsers: state => {
      return {
        ...state,
        userId: 'mehrez',
        otherUserId: 'yosra',
      };
    },
    setUserId: (state, action) => {
      return {
        ...state,
        userId: action.payload,
      };
    },
    setConnectedUserId: (state, action) => {
      return {
        ...state,
        connectedUserId: action.payload,
      };
    },
    setOtherUserId: (state, action) => {
      return {
        ...state,
        otherUserId: action.payload,
      };
    },
    setLocalStream: (state, action) => {
      return {
        ...state,
        localStream: action.payload,
      };
    },
    setGlobalPeer: (state, action) => {
      return {
        ...state,
        globalPeer: action.payload,
      };
    },
    setSocket: (state, action) => {
      return {
        ...state,
        socket: action.payload,
      };
    },
    setOutgoingCall: (state, action) => {
      return {
        ...state,
        outgoingCall: action.payload,
        type: 'OUTGOING_CALL',
      };
    },
    setType: (state, action) => {
      return {
        ...state,
        type: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setError,
  clearCall,
  setIncomingCall,
  setRemoteStream,
  switchUsers,
  setUserId,
  setConnectedUserId,
  setOtherUserId,
  setLocalStream,
  setGlobalPeer,
  setSocket,
  setOutgoingCall,
  setType,
} = CallsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserId = (state: RootState) => state.calls.userId;
export const selectConnectedUserId = (state: RootState) =>
  state.calls.connectedUserId;
export const selectOtherUserId = (state: RootState) => state.calls.otherUserId;
export const selectLocalStream = (state: RootState) => state.calls.localStream;
export const selectRemoteStream = (state: RootState) =>
  state.calls.remoteStream;
export const selectGlobalPeer = (state: RootState) => state.calls.globalPeer;
export const selectSocket = (state: RootState) => state.calls.socket;
export const selectIncomingCall = (state: RootState) =>
  state.calls.incomingCall;
export const selectOutgoingCall = (state: RootState) =>
  state.calls.outgoingCall;
export const selectType = (state: RootState) => state.calls.type;
export const selectError = (state: RootState) => state.calls.error;

export default CallsSlice.reducer;
