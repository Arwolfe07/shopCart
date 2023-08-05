import * as api from "../apis";
import { currentGameData } from "./currentData";

export const getGames = () => async (dispatch) => {
    try {
        const { data } = await api.getGames();
        // console.log(data);
        dispatch({ type: "GET_ALL", payload: data });

    } catch (err) {
        console.log(err);
    }
}

export const getGameDetail = (id) => async (dispatch) => {
    try {
        const { data } = await api.getGameDetails(id);
        console.log(data);
        dispatch(currentGameData(data));
    } catch (err) {
        console.log(err);
    }
}