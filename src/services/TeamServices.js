import {baseUrl} from "../appConfig";
import { v4 as uuidv4 } from 'uuid';

const axios = require('axios').default;



export function saveTeam(team){
    const t = {...team, id: uuidv4()}
    return axios.post(baseUrl+"team", t);
}

export function getTeams(id){
    return axios.get(baseUrl+"team/eventId/"+id);
}