import axios from "axios";

const API = axios.create({
    baseURL: "https://steam2.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': 'aa4cac6c51mshaf32a1f05c8eed1p1a1a78jsnafd4934e95c1',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
    }
});

export const getGames = () => API.get('/search/Counter/page/1');

export const getGameDetails = (id) => API.get(`/appDetail/${id}`);
