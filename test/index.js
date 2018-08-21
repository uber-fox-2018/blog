require('dotenv').config()
process.env.NODE_ENV = 'test';
const mongoose = require("mongoose");

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect  = chai.expect

chai.use(chaiHttp);

describe('/POST /api/auth/signup', () => {
    it('it should signup a new user', (done) => {
        chai.request('http://localhost:3000')
        .get('/api/auth/signup')
        .end(function(err, res) {
            expect((res).to.have.status('201'))
            expect((res).to.be.a('object'))
            done()
        })
        
    })
})