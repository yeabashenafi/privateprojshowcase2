import axios from "axios";

const API_URL = "http://localhost:3000/api";
export class apiservice {
  constructor() {}
  async register(data) {
    await axios.post(`${API_URL}/Accounts`, data).then(res => {
      console.log(res);
    });
  }

  async addStructure(data) {
    await axios.post(`${API_URL}/y`, data).then(res => {
      console.log(res);
    });
  }

  async login(data) {
    let response = await axios.post(`${API_URL}/Accounts/login`, data);
    return response;
  }
  async getData(token) {
    let response = await axios.get(`${API_URL}/y?access_token=${token}`);
    //  console.log(response.data);
    return response.data;
  }
  async getStructure(id) {
    let response = await axios.get(`${API_URL}/y/${id}`);
    return response.data;
  }
  async getAccount(id) {
    let response = await axios.get(`${API_URL}/Accounts/${id}`);
    return response.data;
  }
}
