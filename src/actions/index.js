import axios from 'axios'
import history from '../history'
import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_LINKS,
    ADD_NEW_TARGET,
    DELETE_TARGET,
} from './types'
import { BASE_URL } from '../constants'

export const signIn = code => {
    localStorage.setItem('auth-token', code)
    return {
        type: SIGN_IN,
        payload: code,
    }
}

export const signOut = () => {
    localStorage.removeItem('auth-token')
    return {
        type: SIGN_OUT,
        payload: null,
    }
}

export const fetchLinks = () => async (dispatch, getState) => {
    try {
        const { Token } = getState().auth
        console.log(Token)
        const response = await axios.post(BASE_URL + '/link/get', {
            token: Token,
        })

        let linksObj = {}
        response.data.links.forEach(link => {
            linksObj[link._id] = { ...link }
        })

        dispatch({
            type: FETCH_LINKS,
            payload: linksObj,
        })
    } catch (err) {
        dispatch({
            type: FETCH_LINKS,
            payload: null,
        })
    }
}

export const addNewTarget =
    (targetName, folderID) => async (dispatch, getState) => {
        try {
            const { Token } = getState().auth
            console.log(Token)
            const response = await axios.post(BASE_URL + '/link/create', {
                token: Token,
                targetName: targetName,
                folderID: folderID,
            })

            dispatch({
                type: ADD_NEW_TARGET,
                payload: null,
            })

            history.push('/')

            /* let linksObj = {}
            response.data.links.forEach(link => {
                linksObj[link._id] = { ...link }
            })

             */
        } catch (err) {
            console.log(err)
        }
    }

export const deleteTarget = (linkID, _id) => async (dispatch, getState) => {
    try {
        const { Token } = getState().auth
        // console.log(Token)
        const response = await axios.post(BASE_URL + `/link/delete/${linkID}`, {
            token: Token,
        })

        return dispatch({
            type: DELETE_TARGET,
            payload: _id,
        })
    } catch (err) {}
}
