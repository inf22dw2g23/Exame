const User = require('../models/User');
const Partida = require('../models/Partida');
const Jogador = require('../models/Jogador');

async function seed() {
  try {
    // Código para criar registros iniciais na base de dados
    //Tabela users
    await User.create({name: 'John Doe', email: 'johndoe@example.com', password: '123'});
    await User.create({name: 'Jane Smith', email: 'janesmith@example.com', password: '123'});
    await User.create({name: 'Michael Johnson', email: 'michaeljohnson@example.com', password: '123'});
    await User.create({name: 'Emily Davis', email: 'emilydavis@example.com', password: '123'});
    await User.create({name: 'David Wilson', email: 'davidwilson@example.com', password: '123'});
    await User.create({name: 'Sarah Anderson', email: 'sarahanderson@example.com', password: '123'});
    await User.create({name: 'Robert Taylor', email: 'roberttaylor@example.com', password: '123'});
    await User.create({name: 'Olivia Thomas', email: 'oliviathomas@example.com', password: '123'});
    await User.create({name: 'James Brown', email: 'jamesbrown@example.com', password: '123'});
    await User.create({name: 'Ava Martinez', email: 'avamartinez@example.com', password: '123'});
    await User.create({name: 'William Johnson', email: 'williamjohnson@example.com', password: '123'});
    await User.create({name: 'Sophia Clark', email: 'sophiaclark@example.com', password: '123'});
    await User.create({name: 'Liam Lewis', email: 'liamlewis@example.com', password: '123'});
    await User.create({name: 'Isabella Lee', email: 'isabellalee@example.com', password: '123'});
    await User.create({name: 'Benjamin Allen', email: 'benjaminallen@example.com', password: '123'});
    await User.create({name: 'Mia Scott', email: 'miascott@example.com', password: '123'});
    await User.create({name: 'Henry Green', email: 'henrygreen@example.com', password: '123'});
    await User.create({name: 'Charlotte Baker', email: 'charlottebaker@example.com', password: '123'});
    await User.create({name: 'Alexander Hill', email: 'alexanderhill@example.com', password: '123'});
    await User.create({name: 'Amelia Wright', email: 'ameliawright@example.com', password: '123'});
    await User.create({name: 'Daniel Adams', email: 'danieladams@example.com', password: '123'});
    await User.create({name: 'Sofia Turner', email: 'sofiaturner@example.com', password: '123'});
    await User.create({name: 'Joseph Campbell', email: 'josephcampbell@example.com', password: '123'});
    await User.create({name: 'Harper Mitchell', email: 'harpermitchell@example.com', password: '123'});
    await User.create({name: 'Samuel Young', email: 'samuelyoung@example.com', password: '123'});
    await User.create({name: 'Evelyn Perez', email: 'evelynperez@example.com', password: '123'});
    await User.create({name: 'Sebastian Lopez', email: 'sebastianlopez@example.com', password: '123'});
    await User.create({name: 'Victoria Hall', email: 'victoriahall@example.com', password: '123'});

    //Tabela partidas
    await Partida.create({jogador1_id: 12, jogador2_id: 25, tabuleiro: 'Jogo do Galo', vencedor_id: 12});
    await Partida.create({jogador1_id: 5, jogador2_id: 18, tabuleiro: 'Jogo do Galo', vencedor_id: 18});
    await Partida.create({jogador1_id: 3, jogador2_id: 22, tabuleiro: 'Jogo do Galo', vencedor_id: 3});
    await Partida.create({jogador1_id: 7, jogador2_id: 16, tabuleiro: 'Jogo do Galo', vencedor_id: 16});
    await Partida.create({jogador1_id: 29, jogador2_id: 14, tabuleiro: 'Jogo do Galo', vencedor_id: 14});
    await Partida.create({jogador1_id: 1, jogador2_id: 27, tabuleiro: 'Jogo do Galo', vencedor_id: 1});
    await Partida.create({jogador1_id: 19, jogador2_id: 30, tabuleiro: 'Jogo do Galo', vencedor_id: 19});
    await Partida.create({jogador1_id: 8, jogador2_id: 11, tabuleiro: 'Jogo do Galo', vencedor_id: 8});
    await Partida.create({jogador1_id: 2, jogador2_id: 10, tabuleiro: 'Jogo do Galo', vencedor_id: 2});
    await Partida.create({jogador1_id: 24, jogador2_id: 20, tabuleiro: 'Jogo do Galo', vencedor_id: 20});
    await Partida.create({jogador1_id: 26, jogador2_id: 13, tabuleiro: 'Jogo do Galo', vencedor_id: 13});
    await Partida.create({jogador1_id: 6, jogador2_id: 17, tabuleiro: 'Jogo do Galo', vencedor_id: 17});
    await Partida.create({jogador1_id: 9, jogador2_id: 21, tabuleiro: 'Jogo do Galo', vencedor_id: 9});
    await Partida.create({jogador1_id: 23, jogador2_id: 4, tabuleiro: 'Jogo do Galo', vencedor_id: 23});
    await Partida.create({jogador1_id: 28, jogador2_id: 15, tabuleiro: 'Jogo do Galo', vencedor_id: 15});
    await Partida.create({jogador1_id: 2, jogador2_id: 5, tabuleiro: 'Jogo do Galo', vencedor_id: 2});
    await Partida.create({jogador1_id: 24, jogador2_id: 18, tabuleiro: 'Jogo do Galo', vencedor_id: 24});
    await Partida.create({jogador1_id: 26, jogador2_id: 7, tabuleiro: 'Jogo do Galo', vencedor_id: 7});
    await Partida.create({jogador1_id: 6, jogador2_id: 29, tabuleiro: 'Jogo do Galo', vencedor_id: 6});
    await Partida.create({jogador1_id: 9, jogador2_id: 1, tabuleiro: 'Jogo do Galo', vencedor_id: 1});
    await Partida.create({jogador1_id: 23, jogador2_id: 19, tabuleiro: 'Jogo do Galo', vencedor_id: 23});
    await Partida.create({jogador1_id: 28, jogador2_id: 8, tabuleiro: 'Jogo do Galo', vencedor_id: 8});
    await Partida.create({jogador1_id: 2, jogador2_id: 3, tabuleiro: 'Jogo do Galo', vencedor_id: 2});
    await Partida.create({jogador1_id: 24, jogador2_id: 12, tabuleiro: 'Jogo do Galo', vencedor_id: 24});
    await Partida.create({jogador1_id: 26, jogador2_id: 5, tabuleiro: 'Jogo do Galo', vencedor_id: 26});
    await Partida.create({jogador1_id: 6, jogador2_id: 29, tabuleiro: 'Jogo do Galo', vencedor_id: 29});
    await Partida.create({jogador1_id: 9, jogador2_id: 1, tabuleiro: 'Jogo do Galo', vencedor_id: 1});
    await Partida.create({jogador1_id: 23, jogador2_id: 19, tabuleiro: 'Jogo do Galo', vencedor_id: 19});
    await Partida.create({jogador1_id: 12, jogador2_id: 25, tabuleiro: 'Jogo do Galo', vencedor_id: 12});
    await Partida.create({jogador1_id: 5, jogador2_id: 18, tabuleiro: 'Jogo do Galo', vencedor_id: 18});
    await Partida.create({jogador1_id: 3, jogador2_id: 22, tabuleiro: 'Jogo do Galo', vencedor_id: 3});
    await Partida.create({jogador1_id: 7, jogador2_id: 16, tabuleiro: 'Jogo do Galo', vencedor_id: 16});
    await Partida.create({jogador1_id: 29, jogador2_id: 14, tabuleiro: 'Jogo do Galo', vencedor_id: 14});
    await Partida.create({jogador1_id: 1, jogador2_id: 27, tabuleiro: 'Jogo do Galo', vencedor_id: 1});
    await Partida.create({jogador1_id: 19, jogador2_id: 30, tabuleiro: 'Jogo do Galo', vencedor_id: 19});
    await Partida.create({jogador1_id: 8, jogador2_id: 11, tabuleiro: 'Jogo do Galo', vencedor_id: 8});
    await Partida.create({jogador1_id: 2, jogador2_id: 10, tabuleiro: 'Jogo do Galo', vencedor_id: 2});
    await Partida.create({jogador1_id: 24, jogador2_id: 20, tabuleiro: 'Jogo do Galo', vencedor_id: 20});
    await Partida.create({jogador1_id: 26, jogador2_id: 13, tabuleiro: 'Jogo do Galo', vencedor_id: 13});
    await Partida.create({jogador1_id: 6, jogador2_id: 17, tabuleiro: 'Jogo do Galo', vencedor_id: 17});
    await Partida.create({jogador1_id: 9, jogador2_id: 21, tabuleiro: 'Jogo do Galo', vencedor_id: 9});
    await Partida.create({jogador1_id: 23, jogador2_id: 4, tabuleiro: 'Jogo do Galo', vencedor_id: 23});
    await Partida.create({jogador1_id: 28, jogador2_id: 15, tabuleiro: 'Jogo do Galo', vencedor_id: 15});
    await Partida.create({jogador1_id: 2, jogador2_id: 5, tabuleiro: 'Jogo do Galo', vencedor_id: 2});
    await Partida.create({jogador1_id: 24, jogador2_id: 18, tabuleiro: 'Jogo do Galo', vencedor_id: 24});
    await Partida.create({jogador1_id: 26, jogador2_id: 7, tabuleiro: 'Jogo do Galo', vencedor_id: 7});
    await Partida.create({jogador1_id: 6, jogador2_id: 29, tabuleiro: 'Jogo do Galo', vencedor_id: 6});
    await Partida.create({jogador1_id: 9, jogador2_id: 1, tabuleiro: 'Jogo do Galo', vencedor_id: 1});
    await Partida.create({jogador1_id: 23, jogador2_id: 19, tabuleiro: 'Jogo do Galo', vencedor_id: 19});

    //Tabela jogadores
    await Jogador.create({ nome: 'John Doe', email: 'johndoe@example.com', senha: 'password123', data_registo: '2023-06-28T10:30:00Z' });
    await Jogador.create({ nome: 'Jane Smith', email: 'janesmith@example.com', senha: 'qwerty', data_registo: '2023-06-27T15:45:00Z' });
    await Jogador.create({ nome: 'Michael Johnson', email: 'michaeljohnson@example.com', senha: 'pass123', data_registo: '2023-06-26T08:20:00Z' });
    await Jogador.create({ nome: 'Emily Davis', email: 'emilydavis@example.com', senha: 'abc123', data_registo: '2023-06-25T11:10:00Z' });
    await Jogador.create({ nome: 'David Wilson', email: 'davidwilson@example.com', senha: 'password456', data_registo: '2023-06-24T14:05:00Z' });
    await Jogador.create({ nome: 'Sarah Anderson', email: 'sarahanderson@example.com', senha: 'test123', data_registo: '2023-06-23T09:55:00Z' });
    await Jogador.create({ nome: 'Robert Taylor', email: 'roberttaylor@example.com', senha: 'password789', data_registo: '2023-06-22T12:40:00Z' });
    await Jogador.create({ nome: 'Olivia Thomas', email: 'oliviathomas@example.com', senha: 'test456', data_registo: '2023-06-21T16:15:00Z' });
    await Jogador.create({ nome: 'James Brown', email: 'jamesbrown@example.com', senha: '123456', data_registo: '2023-06-20T19:30:00Z' });
    await Jogador.create({ nome: 'Ava Martinez', email: 'avamartinez@example.com', senha: 'passwordabc', data_registo: '2023-06-19T07:55:00Z' });
    await Jogador.create({ nome: 'William Johnson', email: 'williamjohnson@example.com', senha: 'qwerty123', data_registo: '2023-06-18T23:05:00Z' });
    await Jogador.create({ nome: 'Sophia Clark', email: 'sophiaclark@example.com', senha: 'test789', data_registo: '2023-06-17T13:20:00Z' });
    await Jogador.create({ nome: 'Liam Lewis', email: 'liamlewis@example.com', senha: 'abc456', data_registo: '2023-06-16T08:45:00Z' });
    await Jogador.create({ nome: 'Isabella Lee', email: 'isabellalee@example.com', senha: '123abc', data_registo: '2023-06-15T17:10:00Z' });
    await Jogador.create({ nome: 'Benjamin Allen', email: 'benjaminallen@example.com', senha: 'testabc', data_registo: '2023-06-14T21:25:00Z' });
    await Jogador.create({ nome: 'Mia Scott', email: 'miascott@example.com', senha: 'password123abc', data_registo: '2023-06-13T10:50:00Z' });
    await Jogador.create({ nome: 'Henry Green', email: 'henrygreen@example.com', senha: 'abc123456', data_registo: '2023-06-12T12:35:00Z' });
    await Jogador.create({ nome: 'Charlotte Baker', email: 'charlottebaker@example.com', senha: 'test123abc', data_registo: '2023-06-11T15:40:00Z' });
    await Jogador.create({ nome: 'Alexander Hill', email: 'alexanderhill@example.com', senha: '123test', data_registo: '2023-06-10T18:55:00Z' });
    await Jogador.create({ nome: 'Amelia Wright', email: 'ameliawright@example.com', senha: 'abcqwerty', data_registo: '2023-06-09T09:25:00Z' });
    await Jogador.create({ nome: 'Daniel Adams', email: 'danieladams@example.com', senha: 'password123456', data_registo: '2023-06-08T14:30:00Z' });
    await Jogador.create({ nome: 'Sofia Turner', email: 'sofiaturner@example.com', senha: 'qwertyabc', data_registo: '2023-06-07T16:50:00Z' });
    await Jogador.create({ nome: 'Joseph Campbell', email: 'josephcampbell@example.com', senha: 'test123456', data_registo: '2023-06-06T20:15:00Z' });
    await Jogador.create({ nome: 'Harper Mitchell', email: 'harpermitchell@example.com', senha: 'abcpassword', data_registo: '2023-06-05T11:45:00Z' });
    await Jogador.create({ nome: 'Samuel Young', email: 'samuelyoung@example.com', senha: '123qwerty', data_registo: '2023-06-04T17:05:00Z' });
    await Jogador.create({ nome: 'Evelyn Perez', email: 'evelynperez@example.com', senha: 'passwordabc123', data_registo: '2023-06-03T19:20:00Z' });
    await Jogador.create({ nome: 'Sebastian Lopez', email: 'sebastianlopez@example.com', senha: 'qwerty123abc', data_registo: '2023-06-02T22:45:00Z' });
    await Jogador.create({ nome: 'Victoria Hall', email: 'victoriahall@example.com', senha: 'testabc123', data_registo: '2023-06-01T06:10:00Z' });

    console.log('Seed concluído com sucesso!');
  } catch (error) {
    console.error('Erro durante o seed:', error);
  }
}

module.exports = seed;