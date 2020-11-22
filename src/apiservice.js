import axios from "axios";

const API_URL = "http://localhost:3000/api";
export class apiservice {
  constructor() {}
  // register a new user
  async register(data) {
    await axios.post(`${API_URL}/Accounts`, data).then(res => {
      console.log(res);
    });
  }
  //get an academic office by its id
  async getOfficeById(data) {
    let response = await axios.get(`${API_URL}/AccadamicOffices/${data}`);
    return response;
  }
  //get name of a committe
  async getComiteeName(data) {
    let response = await axios.get(`${API_URL}/committees/${data}`);
    return response.data.name;
  }
  //add need assesment for a curriculum
  async addNeedAssesment(data) {
    let response = await axios.post(`${API_URL}/needAssesments`, data);
    return response.data;
  }
  //add need assesment attachements
  async addAttachements(data) {
    const url = API_URL + "/Container/remoteMethod/upload";
    return new Promise((resolve, reject) => {
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

      fd.append("file", data);
      xhr.send(fd);
    });
  }
  //get curriculums a user is part of
  async getusersFrameworks(id) {
    let response = await axios.get(`${API_URL}/Accounts/${id}/getFrameworks`);
    return response.data.frameworks;
  }
  //get user committees
  async getyourComitee(id) {
    let response = await axios.get(
      `${API_URL}/committees/{id}/checkComitees?user_id=${id}`
    );
    return response.data;
  }
  //add a new curriculum
  async addStructure(data) {
    let response = await axios.post(`${API_URL}/y`, data);
    return response;
  }
  //add rules for an organization
  async addOrgRules(id, token, data) {
    let response = await axios.patch(
      `${API_URL}/Organizations/${id}?${token}`,
      data
    );
    return response;
  }
  // log in a user
  async login(data) {
    let response = await axios.post(`${API_URL}/Accounts/login`, data);
    return response;
  }
  // log in an admin
  async loginAdmin(data) {
    let response = await axios.post(`${API_URL}/admins/login`, data);
    console.log(response);
    return response;
  }
  //get details of a curriculum
  async getData(token) {
    let response = await axios.get(`${API_URL}/y?access_token=${token}`);
    //  console.log(response.data);
    return response.data;
  }
  // get a curriculum  structure by its id
  async getStructure(id) {
    // get curriculum
    let response = await axios.get(`${API_URL}/y/${id}`);
    return response;
  }
  // add a new organization
  async addOrganization(data) {
    console.log(data);
    let response = await axios.post(`${API_URL}/Organizations`, data);
    return response;
  }
  // async addImage(data){
  // }
  // get a user by it's id
  async getUser(id) {
    let response = await axios.get(`${API_URL}/Accounts/${id}`);
    return response;
  }
  // get an admin by id
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
  // update data of an admin
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

  // get all organiztions
  async getOrganizations() {
    let response = await axios.get(`${API_URL}/Organizations`);
    return response;
  }
  //get all accounts
  async getUserInformotion() {
    let response = await axios.get(`${API_URL}/Accounts`);
    console.log(response);
    return response;
  }
  // get all academic offices
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
  // get parent data of an academic office
  async getParentData(data) {
    let response = await axios.post(
      `${API_URL}/AccadamicOffices/getParent`,
      data
    );
    console.log(response);
    return response;
  }
  //Get an organization by id
  async getOrgBackground(id) {
    let response = await axios.get(`${API_URL}/y/${id}`);
    return response;
  }
  //Adding the course details
  async addCourse(token, course) {
    let response = await axios.post(
      `${API_URL}/courses?access_token=${token}`,course
    );
    return response;
  }
  //get Course using curriculum id
  async getCourse(id) {
    let response = await axios.get(`${API_URL}/y/${id}/courses`);
    console.log(response);
    return response;
  }
  //check if a curriculum has requests
  async checkRequest(id) {
    let response = await axios.get(
      `${API_URL}/requests/checkcurriculum?currId=${id}`
    );
    return response.data.hasrequest;
  }
  // get accademic offices within an organization
  async getAcademicOffices(orgid) {
    let response = await axios.get(
      `${API_URL}/Organizations/${orgid}/AcademicOffices`
    );
    return response.data;
  }
  //send a request
  async sendRequest(data) {
    let response = await axios.post(`${API_URL}/requests`, data);
    return response;
  }
  // get the committee in the office
  async getparentcomitees(offid) {
    let response = await axios.get(
      `${API_URL}/committees/{id}/getparentcomittees?comm_id=${offid}`
    );
    return response.data.parent_Comittees;
  }
  //get an organization by id
  async getOrganization(id) {
    let response = await axios.get(`${API_URL}/Organizations/${id}`);
    return response.data;
  }
  //Add a committee
  async addCommittee(data) {
    let response = await axios.post(`${API_URL}/committees`, data);
    console.log(response);
    return response;
  }
  // create children for an academic office
  async createChildren(data) {
    let response = await axios.post(
      `${API_URL}/AccadamicOffices/{id}/createchildren`,
      data
    );
    return response;
  }
  //get children for an office
  async getChildren(par_id) {
    let response = await axios.get(
      `${API_URL}/AccadamicOffices/${par_id}/getChildren`
    );
    return response.data.childs;
  }
  //get info of an admin
  async getAdminInfo(id) {
    // returns admins full information
    let response = await axios.get(`${API_URL}/admins/${id}`);
    console.log(response);
    return response;
  }
  //check if an academic office is the highest in its organzation
  async checkHigher(id) {
    let response = await axios.get(
      `${API_URL}/AccadamicOffices/${id}/checkhigher`
    );
    console.log(response);
    return response;
  }
  //accept a curriculum when it finally reaches the final committe in an organziation
  async accept(req_id) {
    let response = await axios.get(
      `${API_URL}/requests/{id}/AcceptReq?req_id=${req_id}`
    );
    return response;
  }
  //check how many requests are there for a committee
  async howManyNotify(id) {
    // no of notificatons
    let response = await axios.get(`${API_URL}/requests/${id}/checkRequests`);
    // console.log(response);
    return response;
  }
  // view sending requests
  async getSendRequest(id) {
    let response = await axios.get(`${API_URL}/requests/${id}/viewsendRequest`);
    console.log(response);
    return response;
  }
  // get rules for an organization
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
  // get a curriculum component by it's id
  async getComponent(id) {
    let response = await axios.get(
      `${API_URL}/currCOmponents/${id}/getComponent`
    );
    console.log(response);
    return response.data;
  }
  // endorse a curriculum
  async Endorse(req_id, upperCommitteId) {
    let response = await axios.get(
      `${API_URL}/requests/{id}/Endorse?req_id=${req_id}&upperCommitte_id=${upperCommitteId}`
    );
    return response;
  }
  // generate a pdf for a curriculum
  async generatePDF(data) {
    console.log("the id is", data);
    let response = await axios.get(`${API_URL}/y/generatePDF?text=${data}`);
    return response;
  }
  // reject a curriculum request
  async reject(req_id) {
    let response = await axios.get(
      `${API_URL}/requests/{id}/RejectCurr?req_id=${req_id}`
    );
    return response;
  }
  // create a comment for a curriculum
  async createComment(req_id, user_id, body) {
    let response = await axios.get(
      `${API_URL}/comments/{id}/create?req_id=${req_id}&user_id=${user_id}&body=${body}`
    );
    return response;
  }
  //Get curriculum endorsement percentage by id
  async getCurrPercById(id) {
    let response = await axios.get(`${API_URL}/y/${id}`);
    return response.data.endorsePercentage;
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
    return response.data;
  }

  //Return a user Name of a user
  async getUsername(id) {
    let response = await axios.get(`${API_URL}/Accounts/${id}`);
    return response.data.fullname;
  }

  //get userid by name
  async getUserIdByName(name) {
    //let response = await axios.get(`${API_URL}/?filter[where][fullname]=${name}`);
    let response = await axios.get(
      `${API_URL}/Accounts/{id}/getId?name=${name}`
    );
    return response.data.id;
  }
  //check if a user has Endorsed a request
  async checkEndorse(req_id, user_id) {
    let response = await axios.get(
      `${API_URL}/requests/{id}/checkStatus?user_id=${user_id}&req_id=${req_id}`
    );
    return response.data;
  }
  // upload an image
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
  // return full name of a user
  async getUserName(user_id) {
    let response = await axios.get(`${API_URL}/Accounts/${user_id}`);
    return response.data.fullname;
  }
  //getting comments for curriculum
  async getCommentforCurr(currId) {
    let response = await axios.get(
      `${API_URL}/comments/{id}/getComment?curr_id=${currId}`
    );
    return response.data.comments;
  }
  // get organizational endorsement percentage rule
  async getOrgEndorsementPerc(org_id) {
    let response = await axios.get(`${API_URL}/Organizations/${org_id}`);
    return response.data.percentage_for_endorsment;
  }
  // get the no of members in a committee
  async getCommittelength(comm_id) {
    let response = await axios.get(`${API_URL}/committees/${comm_id}`);
    return response.data.members.length;
  }
  // increase endorsment percentage of a curriculum
  async perToEndorse(id, val) {
    let data = {
      endorsePercentage: val
    };
    let response = await axios.patch(`${API_URL}/y/${id}`, data);
    return response;
  }
  // patch request persentage..
  async patchRequestPersentage(id, persent) {
    let data = {
      percentage: persent
    };
    let response = await axios.patch(`${API_URL}/requests/${id}`, data);
    console.log(response);
    return response;
  }
  // get the percentage of endorsement of a request
  async getRequestPercentage(req_id) {
    let response = await axios.get(`${API_URL}/requests/${req_id}`);
    return response.data.percentage;
  }
  // get a request by id
  async getRequestData(id) {
    let response = await axios.get(`${API_URL}/requests/${id}`);
    console.log(response);
    return response;
  }
  // add a user to list of endorsed users for a curriculum
  async addEndorsingUser(data, curr_id) {
    let value = {
      endorsedBy: data
    };
    let response = await axios.patch(`${API_URL}/y/${curr_id}`, value);
    return response;
  }
  // get the full structure of the organization
  async getFullStruct(org_id) {
    let response = await axios.get(
      `${API_URL}/AccadamicOffices/getfullstruct?off_id=${org_id}`
    );
    return response.data.office;
  }

  //GET user name by id
  async getAccountName(id) {
    let response = await axios.get(`${API_URL}/Accounts/${id}`);
    return response.data.fullname;
  }
  // Add minute of meetings for secreatry role of committees
  async addMinute(data) {
    let response = await axios.post(`${API_URL}/Agendas`, data);
    return response;
  }

  //Get reciever committee id from request id
  async getCommitteeId(req_id) {
    let response = await axios.get(`${API_URL}/requests/${req_id}`);
    return response.data.RecieverComiteeId;
  }
  // Adds user id when users endorse a request
  async addEndUser(id, data) {
    let value = {
      endorsedBy: data
    };
    let response = await axios.patch(`${API_URL}/requests/${id}`, value);
    return response;
  }
  // Adds user id when users reject a request
  async addRejUser(id, data) {
    let value = {
      rejectedBy: data
    };
    let response = await axios.patch(`${API_URL}/requests/${id}`, value);
    return response;
  }
  // get activity files for a curriculum
  async getFiles(currId) {
    let response = await axios.get(
      `${API_URL}/needAssesments/{id}/fileForCurr?currId=${currId}`
    );
    return response.data.Files;
  }
  //get a File from a container
  async getfile(file) {
    let response = axios.get(
      `${API_URL}/Container/remoteMethod/download/${file}`
    )
  return response;
}
async addcourses(curr_id, token, data) {
  let response = await axios.post(
    `${API_URL}/y/${curr_id}/courses?access_token=${token}`,
    data
  );
  return response;
}  
  //Adding course using curr id
  
  // async setAdminTo(data){
  //   let response = await axios.post(`${API_URL}/Accounts/setAdmin`,data);
  //   console.log(response);.
  //   return response;
  // }
}
