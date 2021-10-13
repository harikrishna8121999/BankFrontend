import React, { Component } from 'react'
import AccountService from '../services/AccountService';

export default class CreateAccountCOmponent extends Component {
   constructor(props){
       super(props)

       this.state = {
            name:'',
            mobileNumber:'',
            accountType:'',
            accountNumber:'',
            balance:'',
            currency:''

       }
       this.changenameHandler = this.changenameHandler.bind(this);
       this.changemobileNumberHandler = this.changemobileNumberHandler.bind(this);
       this.changeaccountTypeHandler = this.changeaccountTypeHandler.bind(this);
       this.changeaccountNumberHandler = this.changeaccountNumberHandler.bind(this);
       this.changebalanceHandler = this.changebalanceHandler.bind(this);
       this.changecurrencyHandler = this.changecurrencyHandler.bind(this);
       this.saveAccount = this.saveAccount.bind(this);
    }
    saveAccount = (e) =>{
        e.preventDefault();
        let accountDetails = {name: this.state.name, mobileNumber: this.state.mobileNumber, accountType: this.state.accountType, accountNumber:this.state.accountNumber, balance: this.state.balance, currency:this.state.currency};
        console.log('accountDetails =>' + JSON.stringify(accountDetails));
        
        AccountService.createAccount(accountDetails).then(res => {
            this.props.history.push('/list_account');
        });
    }

   changenameHandler= (event) => {
       this.setState({name: event.target.value});
   }
   changemobileNumberHandler= (event) => {
    this.setState({mobileNumber: event.target.value});
}
changeaccountTypeHandler= (event) => {
    this.setState({accountType: event.target.value});
}
changeaccountNumberHandler= (event) => {
    this.setState({accountNumber: event.target.value});
}
changebalanceHandler= (event) => {
    this.setState({balance: event.target.value});
}
changecurrencyHandler= (event) => {
    this.setState({currency: event.target.value});
}

cancel(){
    this.props.history.push('/list_account')
}
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div>
                            <h3>Add Account</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input placeholder="full-name" name="name" className="form-control" value
                                        ={this.state.name} onChange={this.changenameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile Number:</label>
                                        <input placeholder="Mobile Number" name="mobileNumber" className="form-control" value
                                        ={this.state.mobileNumber} onChange={this.changemobileNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Account Type:</label>
                                        <input placeholder="account-type" name="accountType" className="form-control" value
                                        ={this.state.accountType} onChange={this.changeaccountTypeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Account Number:</label>
                                        <input placeholder="account-number" name="accountNumber" className="form-control" value
                                        ={this.state.accountNumber} onChange={this.changeaccountNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Balance:</label>
                                        <input placeholder="balance" name="balance" className="form-control" value
                                        ={this.state.balance} onChange={this.changebalanceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Currency:</label>
                                        <input placeholder="currency" name="currency" className="form-control" value
                                        ={this.state.currency} onChange={this.changecurrencyHandler}/>
                                    </div>
                                    <button onClick={this.saveAccount}>Save</button>
                                    <button onClick={this.cancel.bind(this)}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
