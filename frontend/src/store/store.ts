import { errorRegisterReducer } from "./users/errorRegister.slice";
import { errorLoginReducer } from "./users/errorLogin.slice";
import { theBestDeviceReducer } from "./products/theBestDevice.slice";
import { newDeviceReducer } from "./products/newDevice.slice";
import { cartReducer } from "./cart/cart.slice";
import { deviceReducer } from "./products/product.slice";
import { userReducer } from "./users/user.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const rootReducer = combineReducers({
  userReducer,
  errorLoginReducer,
  errorRegisterReducer,
  deviceReducer,
  cartReducer,
  newDeviceReducer,
  theBestDeviceReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer", "userReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const store = setupStore();
export const persistor = persistStore(store);
