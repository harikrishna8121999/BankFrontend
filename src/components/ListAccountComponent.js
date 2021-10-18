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
        this.deleteAccount = this.deleteAccount.bind(this);
        this.viewAccount = this.viewAccount.bind(this);
    }
    deleteAccount(id){
        AccountService.deleteAccount(id).then(res => {
            this.setState({accountDetails: this.state.accountDetails.filter(AccountDetails => AccountDetails.id !== id)});
        });
    }

    viewAccount(id){
        this.props.history.push(`/view-account/${id}`);
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
               <h2 className="text-center">Accounts List</h2>
               
               <br></br>
               <div className = "row">
                   <table className = "table table-striped table-bordered">
                       <thead>
                           <tr>
                               <th>Id</th>
                               {/* <th>Name</th>
                               <th>Mobile no</th>
                               <th>Account Type</th>
                               <th>Account no</th>
                               <th>Balance</th>
                               <th>Currency</th> */}
                               <th>Actions</th>
                           </tr>
                       </thead>

                       <tbody>
                           {
                               this.state.accountDetails.map(
                                   AccountDetails =>
                                   <tr key = {AccountDetails.id}> 
                                   <td> {AccountDetails.id} </td>
                                    {/* <td> {AccountDetails.name} </td>
                                    <td> {AccountDetails.mobileNumber} </td>
                                    <td> {AccountDetails.accountType} </td>
                                    <td> {AccountDetails.accountNumber} </td>
                                    <td> {AccountDetails.balance} </td>
                                    <td> {AccountDetails.currency} </td> */}
                                    <td>
                                        <button className="btn btn-info" onClick = { () => this.editAccount(AccountDetails.id)}  style={{margin: "10px 10px"}}>Update</button>
                                        <button onClick = { () => this.deleteAccount(AccountDetails.id)} className="btn btn-danger" style={{margin: "10px 10px"}}>Delete</button>
                                        <button onClick = { () => this.viewAccount(AccountDetails.id)}className="btn btn-info" style={{margin: "10px 10px"}} >View Account</button>
                                    </td>
                                    </tr>
                                   
                               )
                           }
                       </tbody>
                   </table>
                   <br></br>
                   <div className = "row">
                   <button className="btn btn-primary btn-lg btn-block" onClick={this.addAccount}>Add Account</button>
               </div>
               </div>
            </div>
        )
    }
}
