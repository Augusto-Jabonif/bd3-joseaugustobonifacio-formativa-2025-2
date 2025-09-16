//Nessa atividade você deverá: 
//1. Criar um bd no “Atlas MongoDB” com o nome de 
//“BD3-NoSQL-Produtos”;
const database = "BD3-NoSQL-Produtos";

//2. No BD Criar uma “collection”
//nomeada como “bd3-nosql-atv7” 
// com a estrutura da tabela do arquivo
const collection = "bd3-nosql-atv7";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);

// Cria uma coleção de dados:
db.createCollection(collection);