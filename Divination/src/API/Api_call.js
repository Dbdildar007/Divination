import axios from "axios";


// endpoints
//const apiBaseUrl = 'https://leisure-api.vercel.app';

const apiBaseUrl = 'http://192.168.78.75:8080';


//Authentication url


const LoginEndpoint = `${apiBaseUrl}/api/Login/sendOTP`;
const RegisterEndpoint = `${apiBaseUrl}/api/register`;
const InviteRegistration = `${apiBaseUrl}/api/InviteCode/Registration`;
const VerifyOTP = `${apiBaseUrl}/api/verifyOTP`;
const SavedataEndpoint = `${apiBaseUrl}/api/Savedata`;


const postapiCall = async (endpoint, req, params) => {

    const options = {
        method: 'POST',
        url: endpoint,
        data: req,
        params: params ? params : {}
    };

    try {
        const response = await axios.request(options);
        //console.log("api wla", response);
        return response.data;
    } catch (error) {
        return error.response.data;
        //console.log('error:', error.response.data);
       // console.log("error result",error.response.data.result);
    }
}


//Register user function
export const RegisterFunctionApi = (req) => {

    return postapiCall(RegisterEndpoint, req);
}
//Login function (sending OTP)
export const LoginFunctionApi = (req) => {

    return postapiCall(LoginEndpoint, req);
}

export const InviteRegistrationApi = (req) => {

    return postapiCall(InviteRegistration, req);
}

export const OTPVerifyApi = (req) =>{
 
    return postapiCall(VerifyOTP,req);
}

export const SavedataApi = (req) =>{
    
    return postapiCall(SavedataEndpoint,req);
}

//localhost:8000653c114a3b183d3b28f8a3a8

//course end points

//post comments endpoint
//const postUserApiEndpoint = id => `${apiBaseUrl}/add/comment/${id}`;

/*


//patch api call 

const postchapterStatusAPICall = async (endpoint, req, params) => {

    const options = {
        method: 'POST',
        url: endpoint,
        data: req,
        params: params ? params : {}
    };

    try {
        const response = await axios.request(options);

        return response.data;
    } catch (error) {
        console.log('error post1: ', error);
        return error.response.data.result;
    }
}






// post data api call

const postUserdataAPICall = async (endpoint, req, params) => {

    const options = {
        method: 'POST',
        url: endpoint,
        data: req,
        params: params ? params : {}
    };

    try {
        const response = await axios.request(options);
        return response.data;

    } catch (error) {
        console.log('error:post2 ', error.response.data.result);
        return error.response.data.result;
    }
}



//POST API  CALL ENDPOINT FOR AUTHENTICATION.
*/
/*



// Login function
export const RegisterFunction = (req) => {
console.log("req data",req);
return(req);
   // return postapiCall(RegisterEndpoint, req);
}

//GET API  CALL ENDPOINT FOR COURSES DATA.
/*
const apiCall = async (endpoint, params) => {

    const options = {
        method: 'GET',
        url: endpoint,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        params: params ? params : {}
    };

    try {
        const response = await axios.request(options);
        console.log("resss", response.data)
        return response.data;
    } catch (error) {
        console.log('error: get1 ',error);
        return {};
    }
}

*/



/*


//fetching course data raw


export const fetchLast10courses = () => {
    return apiCall(Last10courseEndpoint);
}

export const fetchTrendingtechnologiescourse = () => {
    return apiCall(TrendingTechnologiesEndpoin);
}



export const fetchCoursesCategories = (id) => {

    return apiCall(CategoriesCoursesEndpoint(id));
}

export const findAutherBook = (id) => {
    return apiCall(AutherbookEndpoint(id));
}

// add comment function 

export const postCommentfuntion = (id, req) => {

    return postUserdataAPICall(postUserApiEndpoint(id), req);
}


export const findAllcomments = (commentid) => {
    return apiCall(commnetsApiEndpoint(commentid));
}



export const sendchapterStatusvalue = (data) => {

    return postchapterStatusAPICall(sendStatusAPIEndpoint, data);
}

/*
export const fetchLast10gMovies = ()=>{
    return apiCall(lasttenmoviesforcrousel);
}

//hoe screen array movies api

export const fetchTrendingMovies = ()=>{
    return apiCall(TrendingMoviesEndpoint);
}

export const fetchLatestMovies = ()=>{
    return apiCall(LatestMoviesEndpoint);
}

export const fetchPopularMovies = ()=>{
    return apiCall(PopularMoviesEndpoint);
}

export const fetchActionMovies = ()=>{
    return apiCall(ActionMoviesEndpoint);
}

export const fetchMarvelMovies = ()=>{
    return apiCall(MarvelMoviesEndpoint);
}

export const fetchDCMovies = ()=>{
    return apiCall(DCMoviesEndpoint);
}

export const fetchThrillerMovies = ()=>{
    return apiCall(ThrillerMoviesEndpoint);
}
*/
/*export const fetchChapterContent = (id) => {
    return apiCall(chapterContetnEndpoint(id));
}*/





