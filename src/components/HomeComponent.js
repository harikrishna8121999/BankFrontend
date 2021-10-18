import React, { Component } from "react";
import AccountService from "../services/AccountService";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      accountDetails: [],
    };
    this.addAccount = this.addAccount.bind(this);
    this.viewAccount = this.viewAccount.bind(this);
    this.changeidHandler = this.changeidHandler.bind(this);
  }

  addAccount() {
    this.props.history.push("/add-account");
  }
  viewAccount(id) {
    this.props.history.push(`/view-account/${id}`);
  }
  changeidHandler = (event) => {
    this.setState({ id: event.target.value });
  };
  componentDidMount() {
    AccountService.getAccounts().then((res) => {
      this.setState({ accountDetails: res.data });
    });
  }
  render() {
    return (
      <div>
        {this.state.accountDetails.map((AccountDetails) => (
          <tr key={AccountDetails.id}>
            <div className="form-group">
              <label>Id:</label>
              <input
                placeholder="id"
                name="id"
                className="form-control"
                value={this.state.id}
                onChange={this.changeidHandler}
              />
              <button
                onClick={() => this.viewAccount(AccountDetails.id)}
                className="btn btn-info"
              >
                View Account
              </button>
            </div>
          </tr>
        ))}

        {this.state.accountDetails.map((AccountDetails) => (
          <tr key={AccountDetails.id}>
            <td> {AccountDetails.id} </td>
            {/* <td> {AccountDetails.name} </td>
                                    <td> {AccountDetails.mobileNumber} </td>
                                    <td> {AccountDetails.accountType} </td>
                                    <td> {AccountDetails.accountNumber} </td>
                                    <td> {AccountDetails.balance} </td>
                                    <td> {AccountDetails.currency} </td> */}
            <td>
              <button
                onClick={() => this.editAccount(AccountDetails.id)}
                className="btn btn-info"
              >
                Update
              </button>
              <button
                onClick={() => this.deleteAccount(AccountDetails.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                onClick={() => this.viewAccount(AccountDetails.id)}
                className="btn btn-info"
              >
                View Account
              </button>
            </td>
          </tr>
        ))}
      </div>
    );
  }
}
