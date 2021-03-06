import {baseUrl} from "../appConfig";
import { v4 as uuidv4 } from 'uuid';
const axios = require('axios').default;


export function saveEvent(event){
    const temp = {
        name: event.name,
        groupA: event.groupA.split(/\n+/).join(","),
        groupB: event.groupB.split(/\n+/).join(","),
        groupC: event.groupC.split(/\n+/).join(","),
        eventStart: event.eventStart.toISOString(),
        id: uuidv4()
    }
    return axios.post(baseUrl+"event", temp)
}

export function getAllEvents(){ 
    return axios.get(baseUrl+"event/all");
}