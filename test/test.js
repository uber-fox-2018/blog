require('dotenv').config()
process.env.NODE_ENV = 'test';
const mongoose = require("mongoose");

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect  = chai.expect

chai.use(chaiHttp);

describe('/POST /api/articles', () => {
    it('it should create a new article', function(done) {
        chai.request('http://localhost:3000')
        .post('/api/articles')
        .end(function(err, res) {
            expect(res.to.have.status('201'))
            expect((res).to.be.a('object'))
            expect((err).to.be.null)
            done()
        })
        
    })

    
})