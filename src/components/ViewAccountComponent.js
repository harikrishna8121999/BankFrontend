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
                <div>
                    <h3>View Account</h3>
                    <div>
                        <div>
                            <label>Name</label>
                            <div>{this.state.accountDetails.name}</div>
                        </div>
                        <div>
                            <label>Mobile Number</label>
                            <div>{this.state.accountDetails.mobileNumber}</div>
                        </div>
                        <div>
                            <label>Account Type</label>
                            <div>{this.state.accountDetails.accountType}</div>
                        </div>
                        <div>
                            <label>Account Number</label>
                            <div>{this.state.accountDetails.accountNumber}</div>
                        </div>
                        <div>
                            <label>Balance</label>
                            <div>{this.state.accountDetails.balance}</div>
                        </div>
                        <div>
                            <label>Currency</label>
                            <div>{this.state.accountDetails.currency}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
