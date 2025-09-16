//1. Crie um banco de dados no “Atlas MongoDB” 
// com o nome de “BD3-NoSQL-AtlasMongoDB”; 
const database = "BD3-NoSQL-AtlasMongoDB";

//2. Crie uma “collection” no banco de dados “BD3-NoSQL-AtlasMongoDB”
//  nomeada como “bd3-nosql-atv1”; 
const collection = "bd3-nosql-atv1";

use (database);
db.createCollection (collection);
