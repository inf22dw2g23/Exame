const User = require('../models/User');

async function seed() {
  try {
    // Código para criar registros iniciais no banco de dados
    await User.create({name: 'utilizador 1', email: 'utilizador1@example.com' , password : '123'});
    await User.create({name: 'utilizador 2', email: 'utilizador2@example.com' , password : '123' });

    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o seed:', error);
  }
}

module.exports = seed;