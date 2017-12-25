const conf = require('./lib/conf');
const chai = require('chai');
const expect = chai.expect;

const User = 'user';

describe('Conf module', () => {
    describe('getNodes', () => {
        it('should return an array of addresses', (done) => {
            conf.getNodes((err, nodes) => {
                if (err) done(err);
                expect(nodes).to.be.a('Array');
                done();
            });
        });

    });

    describe('getRpcDetails', () => {
        it('should return an object', (done) => {
            conf.getRpcDetails(User, (err, rpcDetails) => {
                if (err) done(err);
                expect(rpcDetails).to.be.a('Object');
                done();
            });
        });
        
        it('should contain an rpcauth field and password', (done) => {
            conf.getRpcDetails(User, (err, rpcDetails) => {
                if (err) done(err);
                expect(rpcDetails.auth).to.be.a('String');
                expect(rpcDetails.password).to.be.a('String');
                done();
            });
        });

    });

    describe('generate', () => {
        it('should return a string', (done) => {
            conf.generate({ user: User }, (err, config) => {
                if (err) done(err);
                expect(config).to.be.a('String');
                done();
            });
        });

        it('should contain server, listen and daemon', (done) => {
            conf.generate({ user: User }, (err, config) => {
                if (err) done(err);
                expect(config).to.include('server=1');
                expect(config).to.include('listen=1');
                expect(config).to.include('daemon=1');
                done();
            });
        });
    });
});