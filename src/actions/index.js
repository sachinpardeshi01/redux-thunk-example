import {GET_ALBUMS,GET_PHOTOS } from "./types";
import axios from "axios";

export const getAlbum = () => {
    return (dispatch) => {

        axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => {
                dispatch({type:GET_ALBUMS,data:res.data})
            })
    }
}

export const getPhotos = (albumId) => {
    return (dispatch) => {

        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => {
                dispatch({type:GET_PHOTOS,data:res.data})
            })
    }
}