const database = "BD3-NoSQL-AtlasMongoDB";
const collection = "bd3-nosql-atv1";
use (database);

//c. Listar um aluno pelo CPF sem o campo "cod_aluno";
db['bd3-nosql-atv1'].find({"cpf":"10101010101"}, {"cod_aluno":0});
