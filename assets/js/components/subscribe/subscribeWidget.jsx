import React, { Component } from "react";
import { translate } from "react-i18next";

import * as subscribeActions from "Actions/subscribeActions";

@translate(["common", "forms", "buttons"])
class SubscribeWidget extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            isActive: false,
            email: ""
        }
    }
    toggleActive(e){
        e.preventDefault();

        this.setState({ isActive: !this.state.isActive });
    }
    handleChangeEmail(e){
        this.setState({ email: e.target.value });
    }
    submitForm(e){
        e.preventDefault();

        subscribeActions.subscribe({
            email: this.state.email
        });

        this.clearForm();
    }
    clearForm(){
        this.setState({
            email: ""
        });
    }
    render(){
        return(
            <div id="subscribe-widget-holder" class={ this.state.isActive ? "__active" : "" }>
                <div class="btn-subscribe" onClick={ (e) => this.toggleActive(e) }>
                    <span>{ this.props.t("buttons:subscribe") }</span>
                </div>
                <div class="inner">
                    <p>{ this.props.t("subscribeText") }</p>
                    <form method="POST" encType="application/x-www-form-urlencoded" id="subscribe-form" onSubmit={ (e) => this.submitForm(e) }>
                        <input
                            type="email"
                            name="email"
                            value={ this.state.email }
                            placeholder={ this.props.t("forms:subscribe.email") }
                            id="subscribe-form-email"
                            onChange={ (e) => this.handleChangeEmail(e) }
                        />
                    </form>
                </div>
            </div>
        );
    }

}

export default SubscribeWidget;