import URLS from "../api";
import http from "Utils/http";

export function subscribe(data = {}){

    http.post({
        url: URLS.subscribers,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: data
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    });

}