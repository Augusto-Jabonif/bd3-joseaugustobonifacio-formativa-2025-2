
/*Criação da constrante que representa o nome do banco de dados*/

const database = "BD3-NoSQL-Produtos";

// Criação da constante que representa o nome da coleção de arquivos
const collection = "bd3-nosql-atv7";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);

/* b. selecione produtos com valores > 700 reais */
//db['bd3-nosql-atv7'].find({valor:{$gt:700}}).sort({valor:1});


/* c. selecione produtos com valores < 450 reais */
//db['bd3-nosql-atv7'].find({valor:{$lt:450}}).sort({valor:-1});

/* d. selecione produtos com valores >=500 E <=950*/
//db['bd3-nosql-atv7'].find({valor:{$gte:500, $lte:950}}).sort({valor:1});

