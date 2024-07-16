// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: UserState = {
  id: 1,
  userName: 'Nguyễn Văn Nam',
  gender: 'Nam',
  dateBirth: '20/03/2023',
  address: 'Thanh Xuân, Hà Nội',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.gender = action.payload.gender;
      state.dateBirth = action.payload.dateBirth;
      state.address = action.payload.address;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
