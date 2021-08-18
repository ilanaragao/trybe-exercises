const uppercase = require('./uppercase.js');

it('test if "ilan" retorna "ILAN"', (done) => {
  uppercase('ilan', (callback) => {
    try {
      expect(callback).toBe('ILAN');
      done();
    } catch (error) {
      done(error);
    }
  });
});
