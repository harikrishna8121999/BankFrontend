import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/api/v1/accountdetails"

class AccountService {
    getAccounts() {
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    createAccount(accountDetails){
        return axios.post(ACCOUNT_API_BASE_URL, accountDetails);
    }

    getAccountById(accountId){
        return axios.get(ACCOUNT_API_BASE_URL + '/' + accountId);
    }

    updateAccount(accountDetails, accountId){
        return axios.put(ACCOUNT_API_BASE_URL + '/'+accountId, accountDetails);
    }
}

export default new AccountService()