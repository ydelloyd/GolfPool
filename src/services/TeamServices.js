import {baseUrl} from "../appConfig";
const axios = require('axios').default;


export function saveTeam(team){
    return axios.post(baseUrl+"team", team);
}

export function getTeams(id){
    return axios.get(baseUrl+"team/eventId/"+id);
}