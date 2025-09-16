const database = "BD3-NoSQL-Produtos";

// Criação da constante que representa o nome da coleção de arquivos
const collection = "bd3-nosql-atv7";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);


// a. Inserir 10 produtos com dados variados, principalmente os 
//valores referente ao preço dos produtos, varie os valores 
//entre 100 e 1000 reais // EU OPTEI POR INSERIR 15; 
db['bd3-nosql-atv7'].insertMany(
    [
        { 
            "cod_produto": 1,
            "nome_produto": "Mouse Gamer",
            "desc_produto": "Mouse com LED RGB e alta precisão",
            "valor": 250.00
        },

        {
            "cod_produto": 2,
            "nome_produto": "Teclado Mecânico",
            "desc_produto": "Teclado com switches azuis",
            "valor": 450.00
        },

        {
            "cod_produto": 3,
            "nome_produto": "Monitor 24 polegadas",
            "desc_produto": "Monitor Full HD com 75Hz",
            "valor": 780.00
        },

        {
            "cod_produto": 4,
            "nome_produto": "Headset USB",
            "desc_produto": "Fone com microfone integrado",
            "valor": 320.00
        },

        {
            "cod_produto": 5,
            "nome_produto": "Webcam HD",
            "desc_produto": "Câmera com resolução 720p",
            "valor": 180.00
        },
        
        {
            "cod_produto": 6,
            "nome_produto": "Cadeira Gamer",
            "desc_produto": "Cadeira ergonômica com ajuste lombar",
            "valor": 950.00
        },

        {
            "cod_produto": 7,
            "nome_produto": "Notebook i5",
            "desc_produto": "Notebook com SSD e 8GB RAM",
            "valor": 1000.00
        },

        {
            "cod_produto": 8,
            "nome_produto": "HD Externo 1TB",
            "desc_produto": "Armazenamento portátil USB 3.0",
            "valor": 390.00
        },

        {
            "cod_produto": 9,
            "nome_produto": "Smartphone 128GB",
            "desc_produto": "Celular com câmera tripla",
            "valor": 890.00
        },

        {
            "cod_produto": 10,
            "nome_produto": "Tablet 10 polegadas",
            "desc_produto": "Tablet com Android e Wi-Fi",
            "valor": 670.00
        },

        {
            "cod_produto": 11,
            "nome_produto": "Impressora Wi-Fi",
            "desc_produto": "Impressora jato de tinta",
            "valor": 420.00
        },

        {
            "cod_produto": 12,
            "nome_produto": "Roteador Dual Band",
            "desc_produto": "Wi-Fi 5 com 4 antenas",
            "valor": 310.00
        },

        {
            "cod_produto": 13,
            "nome_produto": "SSD 512GB",
            "desc_produto": "Disco sólido de alta velocidade",
            "valor": 520.00
        },
        
        {
            "cod_produto": 14,
            "nome_produto": "Placa de Vídeo GTX",
            "desc_produto": "GPU para jogos e edição",
            "valor": 980.00
        },

        {
            "cod_produto": 15,
            "nome_produto": "Fonte 600W",
            "desc_produto": "Fonte com certificação 80 Plus",
            "valor": 410.00
        },
    ]
);