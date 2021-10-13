import React, { Component } from 'react'
import AccountService from '../services/AccountService'

export default class ListAccountComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            accountDetails : []
        }
        this.addAccount = this.addAccount.bind(this);
        this.editAccount = this.editAccount.bind(this);
    }
     editAccount(id){
        this.props.history.push(`/update-account/${id}`);
     }

    componentDidMount(){
        AccountService.getAccounts().then((res) => {
            this.setState({ accountDetails: res.data});
        });
    }

    addAccount(){
        this.props.history.push('/add-account');
    }
    render() {
        return (
            <div>
               <h2>Accounts List</h2>
               <div>
                   <button onClick={this.addAccount}>Add Account</button>
               </div>
               <div>
                   <table>
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Mobile no</th>
                               <th>Account Type</th>
                               <th>Account no</th>
                               <th>Balance</th>
                               <th>Currency</th>
                               <th>Actions</th>
                           </tr>
                       </thead>

                       <tbody>
                           {
                               this.state.accountDetails.map(
                                   AccountDetails =>
                                   <tr key = {AccountDetails.id}> 
                                    <td> {AccountDetails.name} </td>
                                    <td> {AccountDetails.mobileNumber} </td>
                                    <td> {AccountDetails.accountType} </td>
                                    <td> {AccountDetails.accountNumber} </td>
                                    <td> {AccountDetails.balance} </td>
                                    <td> {AccountDetails.currency} </td>
                                    <td>
                                        <button onClick = { () => this.editAccount(AccountDetails.id)}>Update</button>
                                    </td>
                                    </tr>
                                   
                               )
                           }
                       </tbody>
                   </table>
               </div>
            </div>
        )
    }
}
