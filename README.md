# node-serverless-s3


Este é um projeto pessoal para estudo e pratica.

 O projeto consiste em uma aplicação Serverless onde existem duas funções Lambda chamadas "uploadFile" e "downloadFile".
 Ambas funções são configuradas para rodar no "localhost:3000" atraves do comando :

```serverless offline```

Ps. O projeto foi desenvolvido em node.js 20.x.x utilizando o NPM, caso haja alguma incompatibilidade por favor instalar a versão mais atual do node.js.

## Os endpoints disponiveis são :

- 1 -  ```/user/upload``` - faz o upload que uma imgem JPG ou JPEG, o body deve ser um JSON com uma key com nome "file".
- 2 -  ```/user/download-file/{fileName}``` - faz o download do arquivo salvo na AWS, para isso você deve passar o nome do arquivo no lugar de "filename" exatamente como foi feito o upload, o nome deve ser igual! 
- 3 - ```/user/test``` - um endpoint para testar comunicação.

## Testes : 

 Para realizar os testes basta inserir o comando : 

 ```npm run test```

Após inserir o comando, a aplicação irá executar 4 testes, os dois primeiros serão testes de conexão com a AWS S3 onde será enviado 1 arquivo .txt com o nome de "test-file.txt" e se tudo der certo logo em seguida esse arquivo sera deletado do bucket. Os proximos testes também serão testes de integração porem as validações serão testadas como por exemplo, nome da key passada no body do evento, tipo do arquivo a aplicação limita em JPEG e JPG.

Ps. Os testes foram realizados utilidando o framework Jest.
