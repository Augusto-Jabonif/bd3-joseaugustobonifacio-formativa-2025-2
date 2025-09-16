const database = "BD3-NoSQL-AtlasMongoDB";
const collection = "bd3-nosql-atv1";
use (database);

//e. Excluir um Aluno;
db["bd3-nosql-atv1"].deleteOne(
    {cod_aluno:"1003"});
