import React, { Component } from 'react'
import AccountService from '../services/AccountService'

export default class ViewAccountComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            accountDetails: []
        }
    }

    componentDidMount(){
        AccountService.getAccountById(this.state.id).then( res => {
            this.setState({accountDetails: res.data});
        })
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Account</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Name: {this.state.accountDetails.name}</label>
                        </div>
                        <div className = "row">
                            <label>Mobile Number: {this.state.accountDetails.mobileNumber}</label>
                        </div>
                        <div className = "row">
                            <label>Account Type: {this.state.accountDetails.accountType}</label>
                        </div>
                        <div className = "row">
                            <label>Account Number: {this.state.accountDetails.accountNumber}</label>
                            
                        </div>
                        <div className = "row">
                            <label>Balance: {this.state.accountDetails.balance}</label>
                            
                        </div>
                        <div >
                            <label>Currency: {this.state.accountDetails.currency}</label>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
