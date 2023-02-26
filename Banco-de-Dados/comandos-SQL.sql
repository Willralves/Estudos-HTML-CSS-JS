-- Seleciona TODOS dados da tabela "aluno".
SELECT * FROM aluno

-- Seleciona TODOS dados da tabela "professor".
SELECT * FROM professor

-- Seleciona os campos "nome" e "responsavel" da tabela aluno e mostra na ordem em que foram digitados no comando.
SELECT nome, responsavel FROM aluno

-- Seleciona todos os campos da tabela "aluno" no qual a matricula seja 1.
SELECT * FROM aluno WHERE matricula = 1

-- Seleciona todos os campos da tabela "aluno" no qual o valor do campo "nome" comece com a letra "J".
SELECT * FROM aluno WHERE nome LIKE "j%"

-- Seleciona todos os campos da tabela "aluno" no qual o valor do campo "nome" contenha alguma letra "G".
SELECT * FROM aluno WHERE nome LIKE "%g%"

-- Seleciona os campos "matricula" e "cpf" da tabela "aluno" no qual o valor do campo "nome" contenha alguma letra "G".
SELECT matricula, cpf FROM aluno WHERE nome LIKE "%g%"

--=========================================================================================================================================

-- OPERADORES RELACIONAIS

-- Operador =
-- Faz a consulta comparando se o valor do campo é exatamente igual ao informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO NUMBER).
SELECT * FROM aluno WHERE cpf = 45678945645

-- Operador LIKE
-- Faz a consulta comparando se o valor do campo é exatamente igual ao informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO TEXT).
SELECT * FROM aluno WHERE nome LIKE "William"

-- Operador >
-- Faz a consulta comparando se o valor do campo é maior que o informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO NUMBER).
SELECT * FROM aluno WHERE matricula > 1

-- Operador <
-- Faz a consulta comparando se o valor do campo é menor que o informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO NUMBER).
SELECT * FROM aluno WHERE matricula < 5

-- Operador <=
-- Faz a consulta comparando se o valor do campo é menor ou igual ao informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO NUMBER).
SELECT * FROM aluno WHERE matricula <= 5

-- Operador >=
-- Faz a consulta comparando se o valor do campo é maior ou igual ao informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO NUMBER).
SELECT * FROM aluno WHERE matricula >= 2

-- Operador "não igual" <> 
-- Faz a consulta trazendo todos os dados no qual o valor do campo NÃO É igual ao informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO NUMBER).
SELECT * FROM aluno WHERE matricula <> 1

-- Operador "diferente" != 
-- Faz a consulta trazendo todos os dados no qual o valor do campo seja DIFERENTE ao informado na query (SÓ FUNCIONA COM CAMPOS DO TIPO NUMBER).
SELECT * FROM aluno WHERE matricula != 3

--=========================================================================================================================================

-- OPERADORES MATEMATICOS

-- Operador "soma" + 
-- Faz a soma de valores na tabela, neste exemplo ele busca na tabela aluno, aquele que tiver a matricula de numero 2 (no caso 1+1).
SELECT * FROM aluno WHERE matricula = 1 + 1

-- Operador "subtração" - 
-- Faz a subtração de valores na tabela, neste exemplo ele busca na tabela aluno, aquele que tiver a matricula de numero 2 (no caso 3-1).
SELECT * FROM aluno WHERE matricula = 3 - 1

-- Operador "multiplicação" *
-- Faz a multiplicação de valores na tabela, neste exemplo ele busca na tabela aluno, aquele que tiver a matricula de numero 4 (no caso 2*2).
SELECT * FROM aluno WHERE matricula = 2 * 2

-- Operador "divisão" /
-- Faz a divisão de valores na tabela, neste exemplo ele busca na tabela aluno, aquele que tiver a matricula de numero 2 (no caso 4/2).
SELECT * FROM aluno WHERE matricula = 4 / 2

-- Operador "módulo" %
-- Pega o resultado do resto da divisão de um valor por outro, neste exemplo ele busca na tabela aluno, aquele que tiver a matricula de numero 1 (no caso 3 % 2).
SELECT * FROM aluno WHERE matricula = 3 % 2

--=========================================================================================================================================

-- OPERADORES LÓIGICOS

-- AND (pega na tabela "aluno" todos que tenham nome iniciado em "j" e a matricula seja MENOR que 2)
SELECT * FROM aluno WHERE nome LIKE "J%" AND matricula < 2

-- OR (pega na tabela "aluno" todos que tenham nome iniciado em "j" OU que a matricula seja MAIOR que 1)
SELECT * FROM aluno WHERE matricula > 1 OR nome LIKE "j%"

-- BETWEEN (pega na tabela "aluno" todos que tenham a "matricula" entra 4 e 1)
SELECT * FROM aluno WHERE matricula BETWEEN 4 AND 1

-- IN (pega na tabela "aluno" todos que contenham a "matricula" 1, 2 e 5)
SELECT * FROM aluno WHERE matricula IN (1, 2, 5)

-- NOT IN (pega na tabela "aluno" todos que a "matricula" NÃO SEJA 1, 2 e 5)
SELECT * FROM aluno WHERE matricula NOT IN (1, 2, 5)

-- NULL (pega na tabela "aluno" todos que a "matricula" esteja como NULL)
SELECT * FROM aluno WHERE matricula IS NULL

-- NOT NULL (pega na tabela "aluno" todos que a "matricula" NÃO esteja como NULL)
SELECT * FROM aluno WHERE matricula IS NOT NULL

--=========================================================================================================================================

-- MAIS COMANDOS

-- INSERT INTO (Insere na tabela "aluno", dentro dos campos entre parenteses os valores citados na mesma ordem após VALUES)
INSERT INTO aluno (nome, cpf, responsavel) VALUES ("William", 555888321194, "Ariovaldo")













