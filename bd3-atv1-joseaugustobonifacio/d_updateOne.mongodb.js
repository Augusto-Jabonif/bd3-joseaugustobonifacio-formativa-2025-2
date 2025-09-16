const database = "BD3-NoSQL-AtlasMongoDB";
const collection = "bd3-nosql-atv1";
use (database);

//XXXXXXX*****d. Alterar o nome de um aluno, cpf e o rg de um aluno;
//****XXXX****update está obsoleto, recomendado usar: updateOne ou updateMany;
// db["bd3-nosql-atv1"].update(
//     {cod_aluno:"1023"},
//     {$set: {nome: "Sabrina Melo Bonifácio", cpf: "35242812598", rg: "252357253" }}
// );

//d. Alterar o nome de um aluno, cpf e o rg de um aluno;
//update está obsoleto, recomendado usar: updateOne ou updateMany;
db["bd3-nosql-atv1"].updateOne(
    {cod_aluno:"1030"},
    {$set: {nome: "Zuleica Ramos Batista", cpf: "32432432425", rg: "964964964" }}
);
