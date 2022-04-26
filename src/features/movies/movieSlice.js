import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// thunk is a middleware used for running multiple dispatches (i guess)
import { apiKey } from "../../common/apis/apikey"
import movieApi from "../../common/apis/movieApi"
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",
// after running async call , it will give te return to dispatch
    async (movie) => {
        // if nothing passed show harry related films
        const movieText = movie===""?"Harry":movie;
        // console.log(name)
        const response = await movieApi
            .get(`?apikey=${apiKey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log(err)
            })
        // to call actions, dispatch is used
        return (response.data)
    }
)

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",
// after running async call , it will give te return to dispatch
    async (shows) => {
        const seriesText = shows===""?"Harry":shows;
        const response = await movieApi
            .get(`?apikey=${apiKey}&s=${seriesText}&type=series`)
            .catch((err) => {
                console.log(err)
            })
        // to call actions, dispatch is used
        return (response.data)
    }
)

export const fetchAsyncMoviesOrShows = createAsyncThunk("movies/fetchAsyncMoviesOrShows",
// after running async call , it will give te return to dispatch
    async (id) => {
        // here id is imdbId passed
        const response = await movieApi
            .get(`?apikey=${apiKey}&i=${id}&plot=full`)
            .catch((err) => {
                console.log(err)
            })
        // to call actions, dispatch is used
        return (response.data)
    }
)

const initialState = {
    movies: {},
    shows:{},
    moviesOrShows:{}
}
// in redux toolkit, all things related to a state
// is placed at one place
const movieSlice = createSlice({
    name: "movies",//name of slice
    initialState,
    reducers: {
        // attaching actions with reducers
        // addMovies is not doing anything
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        removeSelectedMoviesOrShow:(state)=>{
            // empty the object/clean up
            state.moviesOrShows={}
        }
    },
    // for asynchronous action 
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            // here payload is the data that we've got from async return
            console.log("fulfilled")
            // returning state and data to be added using dispatch
            // this line is adding data to movies property of movies reducer
            return { ...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('rejected')
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            // here payload is the data that we've got from async return
            console.log("shows fulfilled")
            // returning state and data to be added using dispatch
            // this line is adding data to movies property of movies reducer
            return { ...state,shows:payload}
        },
        [fetchAsyncMoviesOrShows.fulfilled]:(state,{payload})=>{
            // here payload is the data that we've got from async return
            console.log("Movies/Shows Detail fulfilled")
            // returning state and data to be added using dispatch
            // this line is adding data to movies property of movies reducer
            return { ...state,moviesOrShows:payload}
        },
    }
})
// exporting only an action
export const { removeSelectedMoviesOrShow } = movieSlice.actions
export default movieSlice.reducer
// to get values, state.nameofReducer.propertyOfState that you want
// here name of reducer defined should be same as in store
export const getAllMovies = (state) => state.movies.movies 
export const getAllShows = (state) => state.movies.shows
// for detail
export const getMoviesOrShows = (state) => state.movies.moviesOrShows