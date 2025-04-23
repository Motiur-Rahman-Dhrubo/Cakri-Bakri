import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
} from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

export const registerUser = createAsyncThunk('auth/registerUser', async ({ email, password }) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res.user;
});

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
});

export const googleSignIn = createAsyncThunk('auth/googleSignIn', async () => {
  const res = await signInWithPopup(auth, googleProvider);
  return res.user;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await signOut(auth);
  localStorage.removeItem('access-token');
  return null;
});

export const updateUser = createAsyncThunk('auth/updateUser', async (updatedData) => {
  await updateProfile(auth.currentUser, updatedData);
  return { ...auth.currentUser };
});

export const listenToAuth = createAsyncThunk('auth/listenToAuth', async () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userInfo = { email: user.email };
        const res = await axios.post('/jwt', userInfo);
        if (res.data.token) {
          localStorage.setItem('access-token', res.data.token);
        }
      } else {
        localStorage.removeItem('access-token');
      }
      resolve(user);
    });
  });
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(listenToAuth.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
