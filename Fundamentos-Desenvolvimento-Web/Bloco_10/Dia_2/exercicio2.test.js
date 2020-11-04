const findUserById = require('./exercicio2.js');

describe('Testing when the user is found and also if not found', () => {
  it('should find the user by id', async (done) => {
    const response = await findUserById(4);
    expect(response.name).toBe('Mark');
    done();
  });

  it('should not find the user by id', async (done) => {
    const response = await findUserById(5);
    expect(response.name).not.toBe('Mark');
    done();
  });
});