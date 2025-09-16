const database = "BD3-NoSQL-Produtos";

// Criação da constante que representa o nome da coleção de arquivos
const collection = "bd3-nosql-atv7";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);
/* Listando todos os Produtos */
 db['bd3-nosql-atv7'].find(); 

