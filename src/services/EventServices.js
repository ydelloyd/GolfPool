import {baseUrl} from "../appConfig";
const axios = require('axios').default;


export function saveEvent(event){
    const temp = {
        name: event.name,
        groupA: event.groupA.split(/\n+/).join(","),
        groupB: event.groupB.split(/\n+/).join(","),
        groupC: event.groupC.split(/\n+/).join(","),
        eventStart: event.eventStart.toISOString()
    }
    console.log(temp);
    return axios.post(baseUrl+"event", temp)
}

export function getAllEvents(){ 
    return axios.get(baseUrl+"event/all");
}