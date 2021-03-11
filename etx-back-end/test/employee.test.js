let Employee = require("../src/app/dao/employee.dao");

let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app.js");
const { expect } = require("chai");
let should = chai.should();

process.env.NODE_EMPLOYEE_JSON_PATH = "../../../test/data/employees.test.json";
chai.use(chaiHttp);

/*
 * Test the /GET route
 */
describe("/GET Employees", () => {
  it("it should GET all the employees", (done) => {
    chai
      .request(server)
      .get("/employee")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        res.body.length.should.be.gt(0);
        res.body[0].should.have.property("firstName").and.to.be.a("string");
        res.body[0].should.have.property("lastName").and.to.be.a("string");
        res.body[0].should.have.property("id").and.to.be.a("number");

        done();
      });
  });
});

/*
 * Test the /GET route with ID
 */
describe("/GET Employees with ID", () => {
  it("it should GET the employee with ID", (done) => {
    chai
      .request(server)
      .get("/employee/1")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");
        res.body.should.have.property("firstName").and.to.be.a("string");
        res.body.should.have.property("lastName").and.to.be.a("string");
        res.body.should.have.property("id").and.to.be.an("number");

        expect(res.body["path"]).to.eql(res.body["employee_path"])
        

        expect(res.body).to.eql({
          id: 1,
          firstName: "Jim",
          lastName: "Halpert",
        });
        done();
      });
  });
});

/*
 * Test the /GET route with wrong ID
 */
describe("/GET Employees with no ID", () => {
  it("it should GET the employee with not existing ID", (done) => {
    chai
      .request(server)
      .get("/employee/69")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.an("object");
        res.body.should.have
          .property("message")
          .and.to.be.a("string")
          .eql("Employee not found!");
        done();
      });
  });
});

/*
 * Test the /GET route with ID
 */
describe("/PUT Employee", () => {
  it("it should update the employee", (done) => {
    let request = {
      id: 2,
      firstName: "Pam",
      lastName: "Beeswax",
    };
    chai
      .request(server)
      .put("/employee")
      .send(request)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");

        res.body.should.have.property("firstName").and.to.be.a("string");
        res.body.should.have.property("lastName").and.to.be.a("string");
        res.body.should.have.property("id").and.to.be.a("number");

        expect(res.body).to.eql(request);
        done();
      });
  });
});


/*
 * Test the /POST route
 */

let randomNumber = Math.floor(Math.random()*100)
let postRequest = {
  firstName: "Test"+randomNumber,
  lastName: "Data"
};
describe("/POST Employee", () => {
  it("it should add the employee", (done) => {
    let request = postRequest
    chai
      .request(server)
      .post("/employee")
      .send(request)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");

        res.body.should.have.property("firstName").and.to.be.a("string");
        res.body.should.have.property("lastName").and.to.be.a("string");
        res.body.should.have.property("id").and.to.be.a("number");

        expect(res.body.firstName).to.eql(request.firstName)
        expect(res.body.lastName).to.eql(request.lastName)
        postRequest['id'] = res.body.id
        done();
      });
  });
});
/*
 * Test the /DELETE route
 */
describe("/DELETE Employee", () => {
  it("it should DELETE the employee added", (done) => {
    let request = postRequest
    chai
      .request(server)
      .delete("/employee/"+postRequest.id)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.an("object");

        res.body.should.have.property("firstName").and.to.be.a("string");
        res.body.should.have.property("lastName").and.to.be.a("string");
        res.body.should.have.property("id").and.to.be.a("number");

        expect(res.body.firstName).to.eql(request.firstName)
        expect(res.body.lastName).to.eql(request.lastName)
        expect(res.body.id).to.eql(request.id)

        console.log("Employee Deleted", request)

        done();
      });
  });
});
