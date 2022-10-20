import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import App from './App'
import reducers from './reducers'
import { CLIENT_ID } from './constants'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </GoogleOAuthProvider>
    </Provider>
)
