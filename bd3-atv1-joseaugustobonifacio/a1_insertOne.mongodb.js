const database = "BD3-NoSQL-AtlasMongoDB";
const collection = "bd3-nosql-atv1";
use (database);

//3. a1) Inserir alunos - Exemplo utilizado para inserir individual (insertOne)
db["bd3-nosql-atv1"].insertOne(
    // {
    //     "cod_aluno": "0999",
    //     "cod_turma": "1DSN",
    //     "nome": "Astrogildo Quinteiro",
    //     "cpf": "12345678912",
    //     "rg": "987654321",
    //     "telefone_aluno": "11980809090",
    //     "telefone_responsavel": "11980809091",
    //     "email": "quinteiro.astrogildo@etec.sp.embu.br",
    //     "data_nascimento": "2005-01-24"
    // }

    {
        "cod_aluno": "1000",
        "cod_turma": "2DSN",
        "nome": "João Silva",
        "cpf": "11111111111",
        "rg": "123456789",
        "telefone_aluno": "11999999999",
        "telefone_responsavel": "11988888888",
        "email": "joao.silva@email.com",
        "data_nascimento": "2005-01-10"
    }
);
