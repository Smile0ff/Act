import { EventEmitter } from "events";

import SubscribeProvider from "Providers/subscribeProvider";

class SubscribeStore extends EventEmitter{

    constructor(){
        super();
        
        this.data = {
            loading: false,
            email: "",
            error: ""
        }
    }
    handleLoadStart(data){
        this.data.loading = data.loading;
    }
    handleLoadEnd(data){
        this.data.loading = data.loading;
        this.data.email = data.email;
        this.data.error = data.error;
    }
    handleLoadError(data){
        this.data.loading = data.loading;
        this.data.email = data.email;
        this.data.error = data.error;
    }
    isLoading(){
        return this.data.loading;
    }
    hasErrors(){
        return this.data.error ? true : false;
    }
    isSuccessfull(){
        return this.data.email ? true : false;
    }
    getEmail(){
        return this.data.email;
    }
    getAll(){
        return this.data;
    }

}

const subscribeStore = new SubscribeStore();

SubscribeProvider.setStore(subscribeStore);

export default subscribeStore;