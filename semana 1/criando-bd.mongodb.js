// Criação da constante que representa o nome do banco de dados
const database = "BD3-AULA";

// Criação da constante que representa o nome da coleção de arquivos
const collection = "LIVRARIA";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);

// Cria uma coleção de dados:
db.createCollection(collection);