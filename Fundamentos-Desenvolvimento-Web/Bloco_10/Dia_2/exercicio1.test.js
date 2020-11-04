const uppercase = require('./exercicio1');

describe('Testing uppercase letters', () => {
  it('should be uppercase letters', async (done) => {
    await uppercase('xablau', (str) => {
      expect(str).toBe('XABLAU');
    });
    done();
  })
})