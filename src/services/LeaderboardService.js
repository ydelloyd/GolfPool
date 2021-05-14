import {baseUrl} from "../appConfig";
const axios = require('axios').default;

export function getLeaderboard(){ 
    return axios.get(baseUrl+"leaderboard");
}