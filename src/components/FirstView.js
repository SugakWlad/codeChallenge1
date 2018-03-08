import React from "react";
import axios from 'axios';

export default class FirstView extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.createList = this.createList.bind(this);
        this.getPopular = this.getPopular.bind(this);
        this.showData = this.showData.bind(this);
    }
    componentWillMount(){
        axios.get('/possible-days').then(resp =>
            this.setState({
                possibleDays: resp.data
            })
        );
    }

    createList(){

        return this.state.possibleDays.map(function(elem){
            return <option key={elem} value={elem}>{elem}</option>
        });
    }

    showData(){
        return (
            <div>
                <table>
                    <tr>
                        <th>Popular Devices</th>
                        <th>Increased Use (%)</th>
                    </tr>
                    {this.state.popular.map(function(row){
                        return (
                            <tr>
                                <td key={row.id}>{row.id}</td>
                                <td key={row.increasedUse}>
                                    {row.increasedUse || row.increasedUse === 0 ? row.increasedUse : "New Device"}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }

    getPopular(e){
        axios.get(`/popular-devices/${e.target.value}`).then(resp =>
           this.setState({
               popular: resp.data
           })
        );
    }

    render(){
        return (
            <div>
                <select onChange={(e) => this.getPopular(e)}>
                    {this.state.possibleDays && this.createList()}
                </select>
                {this.state.popular && this.showData()}
            </div>
        )
    }
}


