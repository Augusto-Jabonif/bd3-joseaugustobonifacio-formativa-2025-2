# bd3-atv1-joseaugustobonifacio
1ª Atividade Prática de Banco de Dados 3 - MongoDB Atlas
# 📚 BD3 - Atividade 1 - José Augusto Bonifácio
Este repositório contém a entrega da **Atividade 1** da disciplina **Banco de Dados 3**, utilizando o banco **MongoDB** e o modelo **NoSQL**.

## 🧠 Objetivo
Realizar operações básicas de **CRUD** (Create, Read, Update, Delete) em uma base de dados MongoDB, com 40 registros de alunos simulados, conforme solicitado na atividade.

## 📁 Arquivos incluídos

– Script com os comandos utilizados nas etapas A a E.
- a0_createAtiv1.mongodb
    arquivo com o script da etapa 1. criação do do BD "Atlas MongoDB" e 2. criação "collection"
- a1_insertOne.mongodb
    arquivo com insert individual (insertOne) de 2 registros de alunos (cod_aluno 0999 e 1000)
- a2_insertMany.mongodb
    arquivo com insert vários (insertMany) 38 registros de lunos (cod_aluno 1001 até 1039) - optei por 40 em vez de 10 para melhor fixação e manipulações
- b_selectAll.mongodb
    arquivo com a listagem de TODOS os alunos  
- c_selectCpf.mongodb
    arquivo com a listagem de UM aluno pelo cpf sem o campo "cod_aluno"
- d_updateOne.mongodb
    arquivo alterando nome, cpf e rg de um aluno - no cod_aluno: 1023 utilizei o comando: update visto em aula (apareceu msg de obsoleto) / usei no 1030 o comando updateOne para treino
- e_deleteOne.mongodb
    arquivo excluindo um aluno: cod_aluno: 1003

## 🧪 Etapas Realizadas

1. Crie um banco de dados no “Atlas MongoDB” com o nome de “BD3-NoSQL-AtlasMongoDB”; 
2. Crie uma “collection” no banco de dados “BD3-NoSQL-AtlasMongoDB” nomeada como “bd3-nosql-atv1”; 
3. Usando o VS Code com a extensão “MongoDB for Vs Code” realize as ações listadas abaixo :
a. Inserir 10 alunos; 
b. Listar todos os alunos; 
c. Listar um aluno pelo CPF sem o campo de “cod_aluno” 
d. Alterar o nome de um aluno, cpf e o rg de um aluno; 
e. Excluir um aluno;

## 📤 Entrega: 
● O projeto deverá ser disponibilizado em um repositório público do 
GitHub nomeado como “bd3-atv1-nome-aluno(a)” e o link deve ser 
enviado na atividade do MS-Teams dentro do prazo.

## 🏆  Critérios de avaliação: 
● Resolução de Problemas; 
● Relacionamento de conceitos; 
● Organização; 
● Cumprimento do prazo de entrega.
