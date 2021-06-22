# Valoriza
Uma API em NodeJS que permite usuários de uma corporação valorizar/elogiar o trabalho dos outros usuários

## **Regras**

- Cadastro de usuário

    [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

    [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG
    - [ ]  Não é permitido cadastrar mais de uma tag com o mesmo nome
    - [ ]  Não é permitido cadastrar tag sem nome
    - [ ]  Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de Elogios
    - [ ]  Não é permitido um usuário cadastrar um elogio para si
    - [ ]  Não é permitido cadastrar elogios para usuários inválidos
    - [ ]  O usuário precisa estar autenticado na aplicação
