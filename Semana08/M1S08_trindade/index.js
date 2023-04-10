(async() => {
    const database = require('./db');

    const Marca = require('./marca');
    await database.sync();

    // INSERÇÃO DE DADOS
    // const novaMarca = await Marca.create({
    //     nome: 'Harper Collins Brasil',
    //     descricao: 'Braço nacional da segunda maior editora do mundo'
    // });

    // const novaMarca2 = await Marca.create({
    //     nome: 'Penguim Random House Brasil',
    //     descricao: 'Resultante da parceria criada com a Companhia das Letras Brasil e Penguim Random House Grupo'
    // });

    //ATUALIZAR DADO
    // const atualizaMarca = await Marca.findByPk(3);
    // atualizaMarca.descricao = 'Braço resultante da parceria criada com a Companhia das Letras Brasil e Penguim Random House Grupo';
    // await atualizaMarca.save();

    // DELEÇÃO DE DADO
    // const excluiMarca = await Marca.findByPk(1);
    // await excluiMarca.destroy();

    // LISTA DADOS
    const listaMarca = await Marca.findAll();
    console.log(listaMarca);

})();