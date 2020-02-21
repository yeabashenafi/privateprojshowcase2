import axios from "axios";

const API_URL = "http://localhost:3000/api";
export class apiservice {
  constructor() {}
  async register(data) {
    await axios.post(`${API_URL}/Accounts`, data).then(res => {
      console.log(res);
    });
  }
  async getComiteeName(data) {
    let response = await axios.get(`${API_URL}/committees/${data}`);
    return response.data.name;
  }
  async getusersFrameworks(id) {
    let response = await axios.get(`${API_URL}/Accounts/${id}/getFrameworks`);
    return response.data.frameworks;
  }
  async getyourComitee(id) {
    let response = await axios.get(
      `${API_URL}/committees/{id}/checkComitees?user_id=${id}`
    );
    return response.data;
  }
  async addStructure(data) {
    let response = await axios.post(`${API_URL}/y`, data);
    return response;
  }
  async addOrgRules(id, token, data) {
    let response = await axios.patch(
      `${API_URL}/Organizations/${id}?${token}`,
      data
    );
    return response;
  }
  async login(data) {
    let response = await axios.post(`${API_URL}/Accounts/login`, data);
    return response;
  }
  async loginAdmin(data) {
    let response = await axios.post(`${API_URL}/admins/login`, data);
    console.log(response);
    return response;
  }
  async getData(token) {
    let response = await axios.get(`${API_URL}/y?access_token=${token}`);
    //  console.log(response.data);
    return response.data;
  }
  async getStructure(id) {
    // get curriculum
    let response = await axios.get(`${API_URL}/y/${id}`);
    return response.data;
  }
  async addOrganization(data) {
    let response = await axios.post(`${API_URL}/Organizations`, data);
    return response;
  }
  // async addImage(data){
  // }
  async getUser(id) {
    let response = await axios.get(`${API_URL}/Accounts/${id}`);
    return response;
  }
  async getAdmin(id) {
    let response = await axios.get(`${API_URL}/admins/${id}`);
    console.log(response);
    return response;
  }
  //update accounts
  async updateUserData(data) {
    let response = await axios.put(`${API_URL}/Accounts`, data);
    console.log(response);
    return response;
  }
  async updateAdminData(adminid, data) {
    let find = {
      where: { id: adminid }
    };
    let response = await axios.post(
      `${API_URL}/admins/upsertWithWhere`,
      find,
      data
    );
    // console.log(response);
    return response;
  }
  ////
  async getOrganizations() {
    let response = await axios.get(`${API_URL}/Organizations`);
    return response;
  }
  async getUserInformotion() {
    let response = await axios.get(`${API_URL}/Accounts`);
    console.log(response);
    return response;
  }
  async getStructureInfo() {
    let response = await axios.get(`${API_URL}/AccadamicOffices`);
    console.log(response);
    return response;
  }
  async addOffices(data) {
    let response = await axios.post(`${API_URL}/AccadamicOffices`, data);
    return response;
  }
  async getParentData(data) {
    let response = await axios.post(
      `${API_URL}/AccadamicOffices/getParent`,
      data
    );
    console.log(response);
    return response;
  }
  async getOrgBackground(id) {
    let response = await axios.get(`${API_URL}/y/${id}`);
    return response;
  }
  async addCourse(course) {
    let response = await axios.post(`${API_URL}/courses`, course);
    return response;
  }
  async checkRequest(id) {
    let response = await axios.get(
      `${API_URL}/requests/checkcurriculum?currId=${id}`
    );
    return response.data.hasrequest;
  }
  async getAcademicOffices(orgid) {
    let response = await axios.get(
      `${API_URL}/Organizations/${orgid}/AcademicOffices`
    );
    return response.data;
  }
  async sendRequest(data) {
    let response = await axios.post(`${API_URL}/requests`, data);
    return response;
  }
  async getparentcomitees(offid) {
    let response = await axios.get(
      `${API_URL}/committees/{id}/getparentcomittees?office_id=${offid}`
    );
    return response.data.parent_Comittees;
  }
  async getOrganization(id) {
    let response = await axios.get(`${API_URL}/Organizations/${id}`);
    return response.data;
  }
  async addCommittee(data) {
    let response = await axios.post(`${API_URL}/committees`, data);
    console.log(response);
    return response;
  }
  async createChildren(data) {
    let response = await axios.post(
      `${API_URL}/AccadamicOffices/{id}/createchildren`,
      data
    );
    return response;
  }
  async getChildren(par_id){
    let response = await axios.get(`${API_URL}/AccadamicOffices/${par_id}/getChildren`);
    return response.data.childs;
  }
  async getAdminInfo(id) {
    // returns admins full information
    let response = await axios.get(`${API_URL}/admins/${id}`);
    console.log(response);
    return response;
  }
  async checkHigher(id) {
    let response = await axios.get(
      `${API_URL}/AccadamicOffices/${id}/checkhigher`
    );
    console.log(response);
    return response;
  }
  async howManyNotify(id) {
    let response = await axios.get(`${API_URL}/requests/${id}/checkRequests`);
    // console.log(response);
    return response;
  }
  async getSendRequest(id) {
    let response = await axios.get(`${API_URL}/requests/${id}/viewsendRequest`);
    console.log(response);
    return response;
  }
  async getorgRules(id){
    let response = await axios.get(`${API_URL}/Organizations/${id}/getRules`);
    return response.data.rules;
  }
  async setnewComponent(data) {
    let response = await axios.post(`${API_URL}/currCOmponents`, data);
    console.log(response);
    return response;
  }
  async getComponent(id) {
    let response = await axios.get(`${API_URL}/currCOmponents/${id}/getComponent`);
    console.log(response);
    return response.data;
  }
  // async setAdminTo(data){
  //   let response = await axios.post(`${API_URL}/Accounts/setAdmin`,data);
  //   console.log(response);
  //   return response;
  // }
}
