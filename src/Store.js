import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/Index.js'
import devTools from 'remote-redux-devtools'
import { persistStore } from 'redux-persist'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { showCrashTip } from './actions/AlertTips'
import { AsyncStorage } from 'react-native'

const crashLogger = store => next => action => {
  try {
    return next(action);
  } catch (error){
    store.dispatch(showCrashTip(error));
    throw(error);
  }
}

const enhancer = compose(
  applyMiddleware(promise(), thunk, logger, crashLogger),
  devTools({
    name: 'CCCmsProject', realtime: true,
  }),
);

const initialState = {
    user:{
      isLoading: false,
      info: { },
      success: true
    },
    tips:{
      needAlert: false,
      message: '',
      alertLeve: -1        //0成功，1提示，2逻辑错误, 3崩溃
    }
}

const store = createStore(rootReducer, initialState, enhancer);
persistStore(store, { storage: AsyncStorage });

export default store;
