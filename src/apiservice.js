import axios from 'axios';

const API_URL = 'http://localhost:3000/api';
export class apiservice{

constructor(){

}
async register(data){
   await axios.post(`${API_URL}/Accounts`,data).then( res => {
       console.log(res);
   })
  };

 async addStructure(data){
   let response = await axios.post(`${API_URL}/y`,data);
   return response;
 };

 async login(data){
   let response = await axios.post(`${API_URL}/Accounts/login`,data);
   return response;
 }
 async getData(token){
 let response =  await axios.get(`${API_URL}/y?access_token=${token}`);
//  console.log(response.data);
 return response.data;
}
async getStructure(id){
  let response = await axios.get(`${API_URL}/y/${id}`)
  return response.data;
}
async addOrganization(data){
  let response = await axios.post(`${API_URL}/Organizations`,data);
  return response;
 }
// async addImage(data){
// }
async getUser(id){
  let response = await axios.get(`${API_URL}/Accounts/${id}`);
  return response;
}
async getOrganizations(){
  let response = await axios.get(`${API_URL}/Organizations`);
  return response;
}
async getUserInformotion(){
  let response = await axios.get(`${API_URL}/Accounts`);
  console.log(response);
  return response;
}
async getStructureInfo(){
  let response = await axios.get(`${API_URL}/AccadamicOffices`);
  console.log(response);
  return response;
}
async addOffices(data){
  let response = await axios.post(`${API_URL}/AccadamicOffices`,data);
    console.log(response);
    return response;
}
async getParentData(data){
  let response = await axios.post(`${API_URL}/AccadamicOffices/getParent`, data);
  console.log(response);
  return response;
}
async getOrgBackground(id){
  let response = await axios.get(`${API_URL}/y/${id}`);
  return response;
}
async addCourse(course){
  let response = await axios.post(`${API_URL}/courses`,course);
  return response;
}
};



