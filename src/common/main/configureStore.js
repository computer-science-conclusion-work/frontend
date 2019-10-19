// IMPORTS
// External
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

// Internal
import { SNACKBAR, loading } from './MainActions'
import rootReducer from './reducers'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const catchErrors = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(err)
    }
    store.dispatch({
      type: SNACKBAR.HARDFAIL,
      error: err,
    })
  }
}

const snackBars = store => next => action => {
  next(action)

  if (action.type.indexOf('.FAILURE') > -1) {
    store.dispatch({
      type: SNACKBAR.SOFTFAIL,
      error: action.error,
    })
  }
  if (
    action.type.indexOf('.SUCCESS') > -1 &&
    action.payload &&
    action.payload.message
  ) {
    store.dispatch({
      type: SNACKBAR.SOFTSUCCESS,
      success: action.payload,
    })
  }
}

const loadingCircle = store => next => action => {
  next(action)

  if (action.loading && action.loading == true) {
    if(action.type.indexOf('.ACTION') > -1){
      store.dispatch({
        type: loading
      })
    }

    if(action.type.indexOf('.SUCCESS') > -1){
      store.dispatch({
        type: loading
      })
    }

    if(action.type.indexOf('.FAILURE') > -1){
      store.dispatch({
        type: loading
      })
    }
  }
}

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, catchErrors, snackBars, loadingCircle))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../main/reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
