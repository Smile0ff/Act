import dispatcher from "../dispatcher";

import URLS from "../api";
import http from "Utils/http";

import * as subscribeConstants from "Constants/subscribeConstants";

export function subscribe(data = {}){

    dispatcher.dispatch({
        type: subscribeConstants.LOAD_SUBSCRIBE_START,
        payload: { loading: true }
    });

    http.post({
        url: URLS.subscribers,
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: data
    })
    .then((response) => {
        response = JSON.parse(response.data);

        dispatcher.dispatch({
            type: subscribeConstants.LOAD_SUBSCRIBE_END,
            payload: {
                loading: false,
                email: response.email,
                error: ""
            }
        });
    })
    .catch((error) => {
        error = JSON.parse(error.data);

        dispatcher.dispatch({
            type: subscribeConstants.LOAD_SUBSCRIBE_ERROR,
            payload: {
                loading: false,
                email: "",
                error: error.detail
            }
        });
    });

}