import config from "../config/config";
import {Client, Account, ID} from "appwrite";



export class AuthService{
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        
        this.account = new Account(this.client);
    }


    async createAccount({email, password, name}){
        try {
           const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // call another method
                return this.logIn({email, password});
               
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;
        }
    }

    async logIn({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
           return await this.account.get();
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser :: error', error);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions() //it deletes all sessions from everywhere
        } catch (error) {
            console.log('Appwrite service :: logOut :: error', error);
        }
    }

}

const authService = new AuthService()


export default authService;










// const client = new Client()
// .setEndpoint() // your api endpoint
// .setProject('[]') // your project id


// const account = new Account(client);

// const user = await account.create(
//     ID.unique(),
//     'email@example.com',
//     'password'
// )