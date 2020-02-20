import Chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { profile } from './mock/profileSettingsMock';

Chai.use(chaiHttp);
Chai.should();

describe('Profile settings', () => {
  it('users should be able to edit their profile', (done) => {
    Chai
      .request(app)
      .put('/api/v1/auth/profile-settings')
      .send(profile)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.have.property('firstName', profile.firstName);
        res.body.data.should.have.property('gender', profile.gender);
        res.body.data.should.have.property('lastName', profile.lastName);
        res.body.data.should.have.property('birthDate', profile.birthDate);
        res.body.data.should.have.property('preferedLang', profile.preferedLang);
        res.body.data.should.have.property('preferedCurrency', profile.preferedCurrency);
        res.body.data.should.have.property('residence', profile.residence);
        res.body.data.should.have.property('department', profile.department);
        res.body.data.should.have.property('managerEmail', profile.managerEmail);
        res.body.data.should.have.property('imageUrl', profile.imageUrl);
        res.body.data.should.have.property('bio', profile.bio);
        res.body.data.should.have.property('passportNumber', profile.passportNumber);
        res.body.should.have.property('message');
        done();
      });
  });
});
