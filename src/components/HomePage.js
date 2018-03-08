import React from "react";
import { Link } from 'react-router';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>
                    <Link to="/view1">First View</Link>
                    <Link to="/view2">Second View</Link>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}