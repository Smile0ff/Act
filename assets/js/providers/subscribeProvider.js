import dispatcher from "../dispatcher";

import * as subscribeConstants from "Constants/subscribeConstants";

class SubscribeProvider{

    constructor(store = {}){
        this.store = store;
    }
    setStore(store){
        this.store = store;
    }
    handleAction(action){

        switch(action.type){
            case subscribeConstants.LOAD_SUBSCRIBE_START:

                this.store.handleLoadStart(action.payload);
                this.store.emit("change");

                break;
            case subscribeConstants.LOAD_SUBSCRIBE_END:

                this.store.handleLoadEnd(action.payload);
                this.store.emit("change");

                break;
            case subscribeConstants.LOAD_SUBSCRIBE_ERROR:

                this.store.handleLoadError(action.payload);
                this.store.emit("change");

                break;
        }

    }

}

const subscribeProvider = new SubscribeProvider();

dispatcher.register((action) => {
    subscribeProvider.handleAction(action);
});

export default subscribeProvider;