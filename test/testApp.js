import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src';
import data from '../src/model';

chai.use(chaiHttp);

const should = chai.should();
const expect = chai.expect;

describe('Test App',()=>{
    describe('Test GET items route',()=>{
        it('it should GET a particular item',(done)=>{
            chai.request(app)
            .get('/search/items/1')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
            })
            done();
        });
        it('it should GET all items',(done)=>{
            chai.request(app)
            .get('/search/items')
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.eql(data);
                done();
            });
        });
    });

    describe('Test POST item route',()=>{
        it('it should POST a particular item',(done)=>{
            const newItem={
                id:1,
                name:'Rwanda',
                location:'kigali'
                };
                chai.request(app)
                .post('/search/item')
                .send(newItem)
                .end((err,res)=>{
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql(201);
                    res.body.should.have.property('message').eql('Created!');
                    res.body.should.have.property('status').eql(201);
                    done();
                })
        })
    })
})