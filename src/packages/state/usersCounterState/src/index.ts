import { atom } from 'recoil';

const usersCounterState = atom({
  key: 'usersCounterState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export default usersCounterState;
