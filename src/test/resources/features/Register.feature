#language: pt
#encoding: utf-8

Funcionalidade: Cadastro de dados
  Esquema do Cenario: Cadastrar dados com sucesso
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "<nome>"
    E Digito no campo email "<email>"
    E Digito no campo senha "<senha>"
    E Clico no botao cadastrar
    Entao Salvo os dados na tabela nome "<nome>" e email "<email>"

    Exemplos:
      | nome             | email                     | senha    |
      | Joao Pedro       | jpvarella09@gmail.com     | 12345678 |
      | Equipe Stefanini | equipestefanini@gmail.com | abcdefgh |
      | Bloco de Notas   | blocodenotas@gmail.com    | 123abc4d |

  Cenario: Cadastrar com erro no nome
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "J"
    E Digito no campo email "jpvarella09@gmail.com"
    E Digito no campo senha "12345678"
    E Clico no botao cadastrar
    Entao Verifico o erro gerado no campo nome

  Cenario: Cadastrar com erro no email
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "Joao Pedro"
    E Digito no campo email "jp.br"
    E Digito no campo senha "12345678"
    E Clico no botao cadastrar
    Entao Verifico o erro gerado no campo email

  Cenario: Cadastrar com erro na senha
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "Joao Pedro"
    E Digito no campo email "jpvarella09@gmail.com"
    E Digito no campo senha "123"
    E Clico no botao cadastrar
    Entao Verifico o erro gerado no campo senha

  Cenario: Cadastrar sem campo nome
    Dado Que acesso o site de testes
    E Digito no campo senha "123"
    E Clico no botao cadastrar
    Entao Verifico o erro gerado da falta de nome

  Cenario: Cadastrar sem campo email
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "Joao Pedro"
    E Digito no campo senha "123"
    E Clico no botao cadastrar
    Entao Verifico o erro gerado da falta de email

  Cenario: Cadastrar sem campo senha
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "Joao Pedro"
    E Digito no campo email "jpvarella09@gmail.com"
    E Clico no botao cadastrar
    Entao Verifico o erro gerado da falta de senha


  Cenario: Cadastrar dados de dois usuarios
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "Joao Pedro"
    E Digito no campo email "jpvarella09@gmail.com"
    E Digito no campo senha "12345678"
    E Clico no botao cadastrar
    E Eu digito no campo nome "Equipe Stefanini"
    E Digito no campo email "equipestefanini@gmail.com"
    E Digito no campo senha "abcdefgh"
    E Clico no botao cadastrar
    Entao Salvo os dados do primeiro nome "Joao Pedro" e do nome "Equipe Stefanini"

  Cenario: Cadastrar dados de dois usuarios e depois apagar 1
    Dado Que acesso o site de testes
    Quando Eu digito no campo nome "Joao Pedro"
    E Digito no campo email "jpvarella09@gmail.com"
    E Digito no campo senha "12345678"
    E Clico no botao cadastrar
    E Eu digito no campo nome "Equipe Stefanini"
    E Digito no campo email "equipestefanini@gmail.com"
    E Digito no campo senha "abcdefgh"
    E Clico no botao cadastrar
    E Deleto usuario "1"
    Entao Verifico tabela com apenas o segundo usuario

