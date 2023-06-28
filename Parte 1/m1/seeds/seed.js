const User = require('../models/User');

async function seed() {
  try {
    // Código para criar registros iniciais no banco de dados
    await User.create({name: 'Usuário 1', email: 'usuario1@example.com' , password : '123'});
    await User.create({name: 'Usuário 2', email: 'usuario2@example.com' , password : '123' });

    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o seed:', error);
  }
}

module.exports = seed;