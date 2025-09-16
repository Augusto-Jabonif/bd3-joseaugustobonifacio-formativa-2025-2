// Criação da constante que representa o nome do banco de dados
const database = "BD3-AULA";

// Criação da constante que representa o nome da coleção de arquivos
const collection = "LIVRARIA";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);

/*Seleciona documentos com uso do operador maior = $gt   */ 
//db['LIVRARIA'].find({valor:{$gt:100}});

/*Seleciona documentos com uso do operador maior = $lt   */ 
//db['LIVRARIA'].find({valor:{$lt:110}});

/*Definindo um intervalo entre valores =  */ 
//db['LIVRARIA'].find({valor:{$gte:50, $lte: 150}})
//                  .sort({valor: -1});

// /*Operador Lógico AND: */
// db['LIVRARIA'].find({$and:[
//   {categoria:{$eq: 'Fantasia Heroica'}},
//   {valor:{$lte:100}}
// ]});

// /*Operador Lógico OR: */
// db['LIVRARIA'].find({$or:[
//   {categoria:{$eq: 'Fantasia Heroica'}},
//   {valor:{$lte:100}}
// ]})

/*Seleção de documentos com uso do operador $in  : */
db['LIVRARIA'].find({
  autor:{
    $in: ['J.R.R Tolkien', 'Isaac Asimov']
  }
}, {_id:0, codigo:0, descricao:0}).sort({valor:1});

