import { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import apiUrls from '../config/apiUrls';
import CoreUtils from '../utils/coreUtils';

const initialAuthState = {
    isAuthenticated: false,
    isInitialized: false,
    token: null
};

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('SITE_DATA_AUTH',JSON.stringify({
            token: accessToken
        }));
    } else {
        localStorage.removeItem('SITE_DATA_AUTH');
    }
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, token } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            token
        };
    },
    LOGIN: (state, action) => {
        const { token } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            token
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false
    }),
    REGISTER: (state, action) => {
        const { regOk } = action.payload;

        return {
            ...state,
            isAuthenticated: false
        };
    }
};

const reducer = (state, action) => handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
    ...initialAuthState,
    login: (formData) => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: (username, email, password) => Promise.resolve()
});


export default AuthContext;