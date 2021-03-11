let Employee = require('../src/app/dao/employee.dao')

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app.js')
let should = chai.should()

chai.use(chaiHttp)

/*
  * Test the /GET route
  */
describe('/GET Employees', () => {
    it('it should GET all the employees', (done) => {
      chai.request(server)
          .get('/employee')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.gt(0)
            done();
          });
    });
});

/*
  * Test the /GET route with ID
  */
describe('/GET Employees with ID', () => {
  it('it should GET the employee with ID', (done) => {
    chai.request(server)
        .get('/employee/1')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.gt(0)
          done();
        });
  });
});