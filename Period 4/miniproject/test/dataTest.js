const chai = require("chai");
const expect = chai.expect;
const request = require("request");


describe('/GET users from REST', () => {
    it('Should GET all the users, in array not length 0', (done) => {

        request("http://localhost:3030/api/users/", (err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.have.length.above(0);
            done();
        });

    });
});

describe('/GET blogposts from GRAPHQL', () => {
    it('Should GET all blogs, in array not length 0', (done) => {

        request("http://localhost:3030/graphql?query={getAllBlogs{id,headline,content}}", (err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.have.length.above(0);
            done();
        });

    });
});

