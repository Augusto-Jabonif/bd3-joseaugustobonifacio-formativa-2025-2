const database = "BD3-NoSQL-AtlasMongoDB";
const collection = "bd3-nosql-atv1";
use (database);

//3. a2) Inserir alunos - Exemplo utilizado para inserir vários (insertMany)
db["bd3-nosql-atv1"].insertMany(
    [
        {
        "cod_aluno": 1001,
        "cod_turma": 102,
        "nome": "Maria Oliveira",
        "cpf": "22222222222",
        "rg": "987654321",
        "telefone_aluno": "11977777777",
        "telefone_responsavel": "11966666666",
        "email": "maria.oliveira@email.com",
        "data_nascimento": "2004-12-05"
        },
        {
        "cod_aluno": 1002,
        "cod_turma": 103,
        "nome": "Carlos Mendes",
        "cpf": "33333333333",
        "rg": "456789123",
        "telefone_aluno": "11955555555",
        "telefone_responsavel": "11944444444",
        "email": "carlos.mendes@email.com",
        "data_nascimento": "2005-06-20"
        },
        {
        "cod_aluno": 1003,
        "cod_turma": 104,
        "nome": "Fernanda Lima",
        "cpf": "44444444444",
        "rg": "321654987",
        "telefone_aluno": "11933333333",
        "telefone_responsavel": "11922222222",
        "email": "fernanda.lima@email.com",
        "data_nascimento": "2006-02-14"
        },
        {
        "cod_aluno": 1004,
        "cod_turma": 105,
        "nome": "Lucas Rocha",
        "cpf": "55555555555",
        "rg": "789123456",
        "telefone_aluno": "11911111111",
        "telefone_responsavel": "11900000000",
        "email": "lucas.rocha@email.com",
        "data_nascimento": "2004-09-30"
        },
        {
        "cod_aluno": 1005,
        "cod_turma": 101,
        "nome": "Aline Costa",
        "cpf": "66666666666",
        "rg": "654321987",
        "telefone_aluno": "11922233344",
        "telefone_responsavel": "11955566677",
        "email": "aline.costa@email.com",
        "data_nascimento": "2005-03-22"
        },
        {
        "cod_aluno": 1006,
        "cod_turma": 102,
        "nome": "Bruno Martins",
        "cpf": "77777777777",
        "rg": "987123654",
        "telefone_aluno": "11988899900",
        "telefone_responsavel": "11911122233",
        "email": "bruno.martins@email.com",
        "data_nascimento": "2005-07-18"
        },
        {
        "cod_aluno": 1007,
        "cod_turma": 103,
        "nome": "Camila Ferreira",
        "cpf": "88888888888",
        "rg": "321987654",
        "telefone_aluno": "11944455566",
        "telefone_responsavel": "11977788899",
        "email": "camila.ferreira@email.com",
        "data_nascimento": "2004-11-25"
        },
        {
        "cod_aluno": 1008,
        "cod_turma": 104,
        "nome": "Daniel Barbosa",
        "cpf": "99999999999",
        "rg": "654987321",
        "telefone_aluno": "11966677788",
        "telefone_responsavel": "11933344455",
        "email": "daniel.barbosa@email.com",
        "data_nascimento": "2006-01-05"
        },
        {
        "cod_aluno": 1009,
        "cod_turma": 105,
        "nome": "Elaine Souza",
        "cpf": "10101010101",
        "rg": "789654123",
        "telefone_aluno": "11900011122",
        "telefone_responsavel": "11922233344",
        "email": "elaine.souza@email.com",
        "data_nascimento": "2005-04-12"
        },
        {
        "cod_aluno": "1010",
        "cod_turma": "2DSN",
        "nome": "Fábio Almeida",
        "cpf": "12121212121",
        "rg": "123123123",
        "telefone_aluno": "11912345678",
        "telefone_responsavel": "11987654321",
        "email": "fabio.almeida@email.com",
        "data_nascimento": "2005-08-15"
        },
        {
        "cod_aluno": "1011",
        "cod_turma": "2DSN",
        "nome": "Gabriela Torres",
        "cpf": "13131313131",
        "rg": "321321321",
        "telefone_aluno": "11923456789",
        "telefone_responsavel": "11998765432",
        "email": "gabriela.torres@email.com",
        "data_nascimento": "2004-10-22"
        },
        {
        "cod_aluno": "1012",
        "cod_turma": "2DSN",
        "nome": "Henrique Ramos",
        "cpf": "14141414141",
        "rg": "456456456",
        "telefone_aluno": "11934567890",
        "telefone_responsavel": "11987654321",
        "email": "henrique.ramos@email.com",
        "data_nascimento": "2005-06-30"
        },
        {
        "cod_aluno": "1013",
        "cod_turma": "2DSN",
        "nome": "Isabela Cunha",
        "cpf": "15151515151",
        "rg": "654654654",
        "telefone_aluno": "11945678901",
        "telefone_responsavel": "11976543210",
        "email": "isabela.cunha@email.com",
        "data_nascimento": "2006-03-18"
        },
        {
        "cod_aluno": "1014",
        "cod_turma": "2DSN",
        "nome": "Jorge Nascimento",
        "cpf": "16161616161",
        "rg": "789789789",
        "telefone_aluno": "11956789012",
        "telefone_responsavel": "11965432109",
        "email": "jorge.nascimento@email.com",
        "data_nascimento": "2004-07-07"
        },
        {
        "cod_aluno": "1015",
        "cod_turma": "2DSN",
        "nome": "Karina Lopes",
        "cpf": "17171717171",
        "rg": "987987987",
        "telefone_aluno": "11967890123",
        "telefone_responsavel": "11954321098",
        "email": "karina.lopes@email.com",
        "data_nascimento": "2005-02-28"
        },
        {
        "cod_aluno": "1016",
        "cod_turma": "2DSN",
        "nome": "Leonardo Teixeira",
        "cpf": "18181818181",
        "rg": "147147147",
        "telefone_aluno": "11978901234",
        "telefone_responsavel": "11943210987",
        "email": "leonardo.teixeira@email.com",
        "data_nascimento": "2004-05-19"
        },
        {
        "cod_aluno": "1017",
        "cod_turma": "2DSN",
        "nome": "Marina Figueiredo",
        "cpf": "19191919191",
        "rg": "258258258",
        "telefone_aluno": "11989012345",
        "telefone_responsavel": "11932109876",
        "email": "marina.figueiredo@email.com",
        "data_nascimento": "2005-09-03"
        },
        {
        "cod_aluno": "1018",
        "cod_turma": "2DSN",
        "nome": "Nathan Cardoso",
        "cpf": "20202020202",
        "rg": "369369369",
        "telefone_aluno": "11990123456",
        "telefone_responsavel": "11921098765",
        "email": "nathan.cardoso@email.com",
        "data_nascimento": "2006-04-25"
        },
        {
        "cod_aluno": "1019",
        "cod_turma": "2DSN",
        "nome": "Olívia Monteiro",
        "cpf": "21212121212",
        "rg": "741741741",
        "telefone_aluno": "11901234567",
        "telefone_responsavel": "11910987654",
        "email": "olivia.monteiro@email.com",
        "data_nascimento": "2004-06-11"
        },
        {
        "cod_aluno": "1020",
        "cod_turma": "2DSN",
        "nome": "Paulo Henrique",
        "cpf": "22222222222",
        "rg": "852852852",
        "telefone_aluno": "11912312312",
        "telefone_responsavel": "11932132132",
        "email": "paulo.henrique@email.com",
        "data_nascimento": "2005-10-01"
        },
        {
        "cod_aluno": "1021",
        "cod_turma": "1DSN",
        "nome": "Queila Andrade",
        "cpf": "23232323232",
        "rg": "963963963",
        "telefone_aluno": "11923423423",
        "telefone_responsavel": "11943243243",
        "email": "queila.andrade@email.com",
        "data_nascimento": "2004-08-17"
        },
        {
        "cod_aluno": "1022",
        "cod_turma": "1DSN",
        "nome": "Rafael Dias",
        "cpf": "24242424242",
        "rg": "159159159",
        "telefone_aluno": "11934534534",
        "telefone_responsavel": "11954354354",
        "email": "rafael.dias@email.com",
        "data_nascimento": "2005-12-09"
        },
        {
        "cod_aluno": "1023",
        "cod_turma": "1DSN",
        "nome": "Sabrina Melo",
        "cpf": "25252525252",
        "rg": "357357357",
        "telefone_aluno": "11945645645",
        "telefone_responsavel": "11965465465",
        "email": "sabrina.melo@email.com",
        "data_nascimento": "2006-05-23"
        },
        {
        "cod_aluno": "1024",
        "cod_turma": "1DSN",
        "nome": "Thiago Moreira",
        "cpf": "26262626262",
        "rg": "951951951",
        "telefone_aluno": "11956756756",
        "telefone_responsavel": "11976576576",
        "email": "thiago.moreira@email.com",
        "data_nascimento": "2004-03-14"
        },
        {
        "cod_aluno": "1025",
        "cod_turma": "1DSN",
        "nome": "Úrsula Pires",
        "cpf": "27272727272",
        "rg": "753753753",
        "telefone_aluno": "11967867867",
        "telefone_responsavel": "11987687687",
        "email": "ursula.pires@email.com",
        "data_nascimento": "2005-11-29"
        },
        {
        "cod_aluno": "1026",
        "cod_turma": "1DSN",
        "nome": "Victor Hugo",
        "cpf": "28282828282",
        "rg": "258258258",
        "telefone_aluno": "11978978978",
        "telefone_responsavel": "11998798798",
        "email": "victor.hugo@email.com",
        "data_nascimento": "2004-01-08"
        },
        {
        "cod_aluno": "1027",
        "cod_turma": "3DST",
        "nome": "Wesley Santana",
        "cpf": "29292929292",
        "rg": "654654654",
        "telefone_aluno": "11989089089",
        "telefone_responsavel": "11909809809",
        "email": "wesley.santana@email.com",
        "data_nascimento": "2005-06-06"
        },
        {
        "cod_aluno": "1028",
        "cod_turma": "3DST",
        "nome": "Xênia Duarte",
        "cpf": "30303030303",
        "rg": "741741741",
        "telefone_aluno": "11990190190",
        "telefone_responsavel": "11910910910",
        "email": "xenia.duarte@email.com",
        "data_nascimento": "2006-02-02"
        },
        {
        "cod_aluno": "1029",
        "cod_turma": "3DST",
        "nome": "Yuri Cavalcante",
        "cpf": "31313131313",
        "rg": "852852852",
        "telefone_aluno": "11901201201",
        "telefone_responsavel": "11921021021",
        "email": "yuri.cavalcante@email.com",
        "data_nascimento": "2004-09-09"
        },
        {
        "cod_aluno": "1030",
        "cod_turma": "3DST",
        "nome": "Zuleika Ramos",
        "cpf": "32323232323",
        "rg": "963963963",
        "telefone_aluno": "11912312312",
        "telefone_responsavel": "11932132132",
        "email": "zuleika.ramos@email.com",
        "data_nascimento": "2005-07-07"
        },
        {
        "cod_aluno": "1031",
        "cod_turma": "3DST",
        "nome": "Arthur Lima",
        "cpf": "33333333333",
        "rg": "147147147",
        "telefone_aluno": "11923423423",
        "telefone_responsavel": "11943243243",
        "email": "arthur.lima@email.com",
        "data_nascimento": "2004-10-10"
        },
        {
        "cod_aluno": "1032",
        "cod_turma": "3DST",
        "nome": "Beatriz Nogueira",
        "cpf": "34343434343",
        "rg": "258258258",
        "telefone_aluno": "11934534534",
        "telefone_responsavel": "11954354354",
        "email": "beatriz.nogueira@email.com",
        "data_nascimento": "2005-03-03"
        },
        {
        "cod_aluno": "1033",
        "cod_turma": "3DSM",
        "nome": "Caio Tavares",
        "cpf": "35353535353",
        "rg": "369369369",
        "telefone_aluno": "11945645645",
        "telefone_responsavel": "11965465465",
        "email": "caio.tavares@email.com",
        "data_nascimento": "2006-06-06"
        },
        {
        "cod_aluno": "1034",
        "cod_turma": "3DSM",
        "nome": "Débora Freitas",
        "cpf": "36363636363",
        "rg": "951951951",
        "telefone_aluno": "11956756756",
        "telefone_responsavel": "11976576576",
        "email": "debora.freitas@email.com",
        "data_nascimento": "2004-04-04"
        },
        {
        "cod_aluno": "1035",
        "cod_turma": "3DSM",
        "nome": "Eduardo Pinto",
        "cpf": "37373737373",
        "rg": "753753753",
        "telefone_aluno": "11967867867",
        "telefone_responsavel": "11987687687",
        "email": "eduardo.pinto@email.com",
        "data_nascimento": "2005-05-05"
        },
        {
        "cod_aluno": "1036",
        "cod_turma": "3DSM",
        "nome": "Fabiana Rocha",
        "cpf": "38383838383",
        "rg": "258258258",
        "telefone_aluno": "11978978978",
        "telefone_responsavel": "11998798798",
        "email": "fabiana.rocha@email.com",
        "data_nascimento": "2004-12-12"
        },
        {
        "cod_aluno": "1037",
        "cod_turma": "2DSM",
        "nome": "Gustavo Almeida",
        "cpf": "39393939393",
        "rg": "654654654",
        "telefone_aluno": "11989089089",
        "telefone_responsavel": "11909809809",
        "email": "gustavo.almeida@email.com",
        "data_nascimento": "2005-01-01"
        },
        {
        "cod_aluno": "1038",
        "cod_turma": "2DSM",
        "nome": "Helena Ribeiro",
        "cpf": "40404040404",
        "rg": "741741741",
        "telefone_aluno": "11990190190",
        "telefone_responsavel": "11910910910",
        "email": "helena.ribeiro@email.com",
        "data_nascimento": "2006-07-07"
        },
        {
        "cod_aluno": "1039",
        "cod_turma": "2DSM",
        "nome": "Igor Fernandes",
        "cpf": "41414141414",
        "rg": "852852852",
        "telefone_aluno":"45982667634",
        "telefone_responsavel": "45968736442",
        "email":"fernandes.igor@email.com",
        "data_nascimento":"2004-09-27"
        }
    ]
);
