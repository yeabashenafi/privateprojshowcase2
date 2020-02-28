import axios from "axios";

const API_URL = "http://localhost:3000/api";
export class apiservice {
  constructor() {}
  async register(data) {
    await axios.post(`${API_URL}/Accounts`, data).then(res => {
      console.log(res);
    });
  }
  async getOfficeById(data) {
    let response = await axios.get(`${API_URL}/AccadamicOffices/${data}`);
    return response;
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
  //add offices to the specific organization
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
  //Adding the course details
  async addCourse(token, course) {
    let response = await axios.post(
      `${API_URL}/courses?access_token=${token}`,
      course
    );
    return response;
  }
  //get Course using curriculum id
  async getCourse(id) {
    let response = await axios.get(`${API_URL}/y/${id}/courses`);
    console.log(response);
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
      `${API_URL}/committees/{id}/getparentcomittees?comm_id=${offid}`
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
  async getChildren(par_id) {
    let response = await axios.get(
      `${API_URL}/AccadamicOffices/${par_id}/getChildren`
    );
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
    // no of notificatons
    let response = await axios.get(`${API_URL}/requests/${id}/checkRequests`);
    // console.log(response);
    return response;
  }
  async getSendRequest(id) {
    let response = await axios.get(`${API_URL}/requests/${id}/viewsendRequest`);
    console.log(response);
    return response;
  }
  async getorgRules(id) {
    let response = await axios.get(`${API_URL}/Organizations/${id}/getRules`);
    return response.data.rules;
  }
  //set New component(add)
  async setnewComponent(data) {
    let response = await axios.post(`${API_URL}/currCOmponents`, data);
    console.log(response);
    return response;
  }
  async getComponent(id) {
    let response = await axios.get(
      `${API_URL}/currCOmponents/${id}/getComponent`
    );
    console.log(response);
    return response.data;
  }
  async Endorse(req_id, upperCommitteId) {
    let response = await axios.get(
      `${API_URL}/requests/{id}/Endorse?req_id=${req_id}&upperCommitte_id=${upperCommitteId}`
    );
    return response;
  }
  async generatePDF(data) {
    console.log("the id is", data);
    let response = await axios.get(`${API_URL}/y/generatePDF?text=${data}`);
    return response;
  }
  async reject(req_id) {
    let response = await axios.get(
      `${API_URL}/requests/{id}/RejectCurr?req_id=${req_id}`
    );
    return response;
  }
  async createComment(req_id, user_id, body) {
    let response = await axios.get(
      `${API_URL}/comments/{id}/create?req_id=${req_id}&user_id=${user_id}&body=${body}`
    );
    return response;
  }
  //Get Request data
  async getRequest(token) {
    let response = await axios.get(`${API_URL}/requests?access_token=${token}`);
    return response;
  }
  //get committee by Id and return detail of the committee
  async getCommitteeById(id) {
    let response = await axios.get(`${API_URL}/committees/${id}`);
    console.log(response);
    return response;
  }
  async uploadImage(image) {
    const url = API_URL + "/Container/remoteMethod/upload";
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      var fd = new FormData();

      xhr.open("POST", url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("error");
        }
      };
      fd.append("file", image);
      xhr.send(fd);
    });
  }

  async getUserName(user_id) {
    let response = await axios.get(`${API_URL}/Accounts/${user_id}`);
    return response.data.fullname;
  }
  async getCommentforCurr(currId) {
    let response = await axios.get(
      `${API_URL}/comments/{id}/getComment?curr_id=${currId}`
    );
    return response.data.comments;
  }
  async getOrgEndorsementPerc(org_id) {
    let response = await axios.get(`${API_URL}/Organizations/${org_id}`);
    return response.data.percentage_for_endorsment;
  }
  async perToEndorse(id, val) {
    let data = {
      endorsePercentage: val
    };
    let response = await axios.patch(`${API_URL}/y/${id}`, data);
    return response;
  }
  // async setAdminTo(data){
  //   let response = await axios.post(`${API_URL}/Accounts/setAdmin`,data);
  //   console.log(response);
  //   return response;
  // }
}
