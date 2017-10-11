import React from 'react';

export default class Obs extends React.Component {

    componentWillMount(){

        const script = document.createElement("script");

        script.src = "/obs.js";
        script.async = true;

        document.body.appendChild(script);

    }

    render(){
        return null;
    }

}
