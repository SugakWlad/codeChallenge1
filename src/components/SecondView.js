import React from "react";
import axios from "axios";

export default class SecondView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: 'sensor',
            status: 'online'
        };
        this.changeType = this.changeType.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.getUsagesInfo = this.getUsagesInfo.bind(this);
        this.showInfo = this.showInfo.bind(this);
    };

    changeType(e){
        this.setState({
            type: e.target.value
        });
    };

    changeStatus(e){
        this.setState({
            status: e.target.value
        });
    };

    getUsagesInfo(){
        axios.get(`/usages-info/${this.state.type}/${this.state.status}`).then(resp =>
            this.setState({
                info: resp.data
            })
        );
    };

    showInfo(){
        return (
            <div>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Total devices</th>
                    </tr>
                    {this.state.info.map(function(elem){
                        return (
                            <tr>
                                <td key={elem.date}>{elem.date}</td>
                                <td key={elem.counter}>{elem.counter}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }

    render(){
        return (
            <div>
                <div>
                    <select onChange={e => this.changeType(e)}>
                        <option>sensor</option>
                        <option>gateway</option>
                    </select>
                    <select onChange={e => this.changeStatus(e)}>
                        <option>online</option>
                        <option>offline</option>
                    </select>
                    <div onClick={this.getUsagesInfo}>get info</div>
                </div>
                <div>
                    {this.state.info && this.showInfo()}
                </div>
            </div>
        )
    };
};