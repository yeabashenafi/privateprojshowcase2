import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
export class apiservice{

constructor(){

}
async register(data){

   await axios.post(`${API_URL}/Accounts`,data).then( res => {
       console.log(res);
   });

 };

 async addStructure(data){
   await axios.post(`${API_URL}/y`,data).then( res => {
     console.log(res);
   })
 };

 async login(data){
   let response = await axios.post(`${API_URL}/Accounts/login`,data);
   return response;
 }

};



