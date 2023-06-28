const User = require('./models/User');

async function findUsers() {
  const email = 'john.doe@example.com';
  const name = 'John Doe';

  if (email !== undefined && name !== undefined) {
    // The email and name parameters are not undefined, so we can call the findAll method.
    const users = await users.findAll({ where: { email, name } });
    return users;
  } else {
    // The email or name parameters are undefined, so we don't need to call the findAll method.
    return null;
  }
}

// This code will call the findUsers function and return the results.
const users = await findUsers();
