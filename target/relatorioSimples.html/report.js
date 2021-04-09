$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#encoding: utf-8"
    }
  ],
  "line": 4,
  "name": "Cadastro de dados",
  "description": "",
  "id": "cadastro-de-dados",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Cadastrar dados com sucesso",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-dados-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Eu digito no campo nome \"\u003cnome\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Digito no campo email \"\u003cemail\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "Digito no campo senha \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Salvo os dados na tabela nome \"\u003cnome\u003e\" e email \"\u003cemail\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;",
  "rows": [
    {
      "cells": [
        "nome",
        "email",
        "senha"
      ],
      "line": 14,
      "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;;1"
    },
    {
      "cells": [
        "Joao Pedro",
        "jpvarella09@gmail.com",
        "12345678"
      ],
      "line": 15,
      "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;;2"
    },
    {
      "cells": [
        "Equipe Stefanini",
        "equipestefanini@gmail.com",
        "abcdefgh"
      ],
      "line": 16,
      "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;;3"
    },
    {
      "cells": [
        "Bloco de Notas",
        "blocodenotas@gmail.com",
        "123abc4d"
      ],
      "line": 17,
      "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 3880667700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Cadastrar dados com sucesso",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Eu digito no campo nome \"Joao Pedro\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Digito no campo email \"jpvarella09@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "Digito no campo senha \"12345678\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Salvo os dados na tabela nome \"Joao Pedro\" e email \"jpvarella09@gmail.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 3002808500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 176878800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpvarella09@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 199476500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 152429200,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 84886100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 31
    },
    {
      "val": "jpvarella09@gmail.com",
      "offset": 52
    }
  ],
  "location": "Register.salvoOsDadosNaTabelaNomeEEmail(String,String)"
});
formatter.result({
  "duration": 731345700,
  "status": "passed"
});
formatter.after({
  "duration": 1181713800,
  "status": "passed"
});
formatter.before({
  "duration": 2092435200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Cadastrar dados com sucesso",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Eu digito no campo nome \"Equipe Stefanini\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Digito no campo email \"equipestefanini@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "Digito no campo senha \"abcdefgh\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Salvo os dados na tabela nome \"Equipe Stefanini\" e email \"equipestefanini@gmail.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 2905865500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Equipe Stefanini",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 149563600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equipestefanini@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 322618000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefgh",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 113503300,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 69373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Equipe Stefanini",
      "offset": 31
    },
    {
      "val": "equipestefanini@gmail.com",
      "offset": 58
    }
  ],
  "location": "Register.salvoOsDadosNaTabelaNomeEEmail(String,String)"
});
formatter.result({
  "duration": 704596700,
  "status": "passed"
});
formatter.after({
  "duration": 1253182700,
  "status": "passed"
});
formatter.before({
  "duration": 2001997600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Cadastrar dados com sucesso",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-dados-com-sucesso;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 6,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "Eu digito no campo nome \"Bloco de Notas\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "Digito no campo email \"blocodenotas@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "Digito no campo senha \"123abc4d\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 10,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "Salvo os dados na tabela nome \"Bloco de Notas\" e email \"blocodenotas@gmail.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 2939026100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloco de Notas",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 141405700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "blocodenotas@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 195569500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123abc4d",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 122150000,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 73368400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bloco de Notas",
      "offset": 31
    },
    {
      "val": "blocodenotas@gmail.com",
      "offset": 56
    }
  ],
  "location": "Register.salvoOsDadosNaTabelaNomeEEmail(String,String)"
});
formatter.result({
  "duration": 711421800,
  "status": "passed"
});
formatter.after({
  "duration": 878027400,
  "status": "passed"
});
formatter.before({
  "duration": 1927142500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Cadastrar com erro no nome",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-com-erro-no-nome",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 20,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "Eu digito no campo nome \"J\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "Digito no campo email \"jpvarella09@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "Digito no campo senha \"12345678\"",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "Verifico o erro gerado no campo nome",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 4825572700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 121070300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpvarella09@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 160356700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 122727400,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 68278300,
  "status": "passed"
});
formatter.match({
  "location": "Register.verificoOErroGeradoNoCampoNome()"
});
formatter.result({
  "duration": 802860800,
  "status": "passed"
});
formatter.after({
  "duration": 838175700,
  "status": "passed"
});
formatter.before({
  "duration": 1775649500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Cadastrar com erro no email",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-com-erro-no-email",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 28,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "Eu digito no campo nome \"Joao Pedro\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 30,
  "name": "Digito no campo email \"jp.br\"",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "Digito no campo senha \"12345678\"",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "Verifico o erro gerado no campo email",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 2962158800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 132399300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jp.br",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 131684100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 106619800,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 66675500,
  "status": "passed"
});
formatter.match({
  "location": "Register.verificoOErroGeradoNoCampoEmail()"
});
formatter.result({
  "duration": 785130000,
  "status": "passed"
});
formatter.after({
  "duration": 1260560300,
  "status": "passed"
});
formatter.before({
  "duration": 1806679700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Cadastrar com erro na senha",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-com-erro-na-senha",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 36,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 37,
  "name": "Eu digito no campo nome \"Joao Pedro\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 38,
  "name": "Digito no campo email \"jpvarella09@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 39,
  "name": "Digito no campo senha \"123\"",
  "keyword": "E "
});
formatter.step({
  "line": 40,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "Verifico o erro gerado no campo senha",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 2906843400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 128845000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpvarella09@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 163560800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 95955300,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 62365900,
  "status": "passed"
});
formatter.match({
  "location": "Register.verificoOErroGeradoNoCampoSenha()"
});
formatter.result({
  "duration": 785508500,
  "status": "passed"
});
formatter.after({
  "duration": 832057800,
  "status": "passed"
});
formatter.before({
  "duration": 1831100100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Cadastrar sem campo nome",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-sem-campo-nome",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 44,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 45,
  "name": "Digito no campo senha \"123\"",
  "keyword": "E "
});
formatter.step({
  "line": 46,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "Verifico o erro gerado da falta de nome",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 2786975600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 123953800,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 68211900,
  "status": "passed"
});
formatter.match({
  "location": "Register.verificoOErroGeradoDaFaltaDeNome()"
});
formatter.result({
  "duration": 755866900,
  "status": "passed"
});
formatter.after({
  "duration": 808799200,
  "status": "passed"
});
formatter.before({
  "duration": 1768039200,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Cadastrar sem campo email",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-sem-campo-email",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 50,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 51,
  "name": "Eu digito no campo nome \"Joao Pedro\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 52,
  "name": "Digito no campo senha \"123\"",
  "keyword": "E "
});
formatter.step({
  "line": 53,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 54,
  "name": "Verifico o erro gerado da falta de email",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 2796370700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 137941500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 114467100,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 93947500,
  "status": "passed"
});
formatter.match({
  "location": "Register.verificoOErroGeradoDaFaltaDeEmail()"
});
formatter.result({
  "duration": 805848400,
  "status": "passed"
});
formatter.after({
  "duration": 1278836500,
  "status": "passed"
});
formatter.before({
  "duration": 1841901500,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Cadastrar sem campo senha",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-sem-campo-senha",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 57,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 58,
  "name": "Eu digito no campo nome \"Joao Pedro\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 59,
  "name": "Digito no campo email \"jpvarella09@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 60,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 61,
  "name": "Verifico o erro gerado da falta de senha",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 2885151600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 129707000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpvarella09@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 166206000,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 64134200,
  "status": "passed"
});
formatter.match({
  "location": "Register.verificoOErroGeradoDaFaltaDeSenha()"
});
formatter.result({
  "duration": 787289700,
  "status": "passed"
});
formatter.after({
  "duration": 1246612600,
  "status": "passed"
});
formatter.before({
  "duration": 1754154900,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Cadastrar dados de dois usuarios",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-dados-de-dois-usuarios",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 65,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 66,
  "name": "Eu digito no campo nome \"Joao Pedro\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 67,
  "name": "Digito no campo email \"jpvarella09@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 68,
  "name": "Digito no campo senha \"12345678\"",
  "keyword": "E "
});
formatter.step({
  "line": 69,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 70,
  "name": "Eu digito no campo nome \"Equipe Stefanini\"",
  "keyword": "E "
});
formatter.step({
  "line": 71,
  "name": "Digito no campo email \"equipestefanini@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 72,
  "name": "Digito no campo senha \"abcdefgh\"",
  "keyword": "E "
});
formatter.step({
  "line": 73,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 74,
  "name": "Salvo os dados do primeiro nome \"Joao Pedro\" e do nome \"Equipe Stefanini\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 3253750200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 147379300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpvarella09@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 178513100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 121439400,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 75924700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Equipe Stefanini",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 123397800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equipestefanini@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 131971300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefgh",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 103411200,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 46959700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 33
    },
    {
      "val": "Equipe Stefanini",
      "offset": 56
    }
  ],
  "location": "Register.salvoOsDadosDoPrimeiroNomeEDoNome(String,String)"
});
formatter.result({
  "duration": 623034600,
  "status": "passed"
});
formatter.after({
  "duration": 867983800,
  "status": "passed"
});
formatter.before({
  "duration": 1870970000,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Cadastrar dados de dois usuarios e depois apagar 1",
  "description": "",
  "id": "cadastro-de-dados;cadastrar-dados-de-dois-usuarios-e-depois-apagar-1",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 77,
  "name": "Que acesso o site de testes",
  "keyword": "Dado "
});
formatter.step({
  "line": 78,
  "name": "Eu digito no campo nome \"Joao Pedro\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 79,
  "name": "Digito no campo email \"jpvarella09@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 80,
  "name": "Digito no campo senha \"12345678\"",
  "keyword": "E "
});
formatter.step({
  "line": 81,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 82,
  "name": "Eu digito no campo nome \"Equipe Stefanini\"",
  "keyword": "E "
});
formatter.step({
  "line": 83,
  "name": "Digito no campo email \"equipestefanini@gmail.com\"",
  "keyword": "E "
});
formatter.step({
  "line": 84,
  "name": "Digito no campo senha \"abcdefgh\"",
  "keyword": "E "
});
formatter.step({
  "line": 85,
  "name": "Clico no botao cadastrar",
  "keyword": "E "
});
formatter.step({
  "line": 86,
  "name": "Deleto usuario \"1\"",
  "keyword": "E "
});
formatter.step({
  "line": 87,
  "name": "Verifico tabela com apenas o segundo usuario",
  "keyword": "Entao "
});
formatter.match({
  "location": "Register.queAcessoOSiteDeTestes()"
});
formatter.result({
  "duration": 4629545100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joao Pedro",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 123581600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jpvarella09@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 172566700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 113436600,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 60886400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Equipe Stefanini",
      "offset": 25
    }
  ],
  "location": "Register.euDigitoNoCampoNome(String)"
});
formatter.result({
  "duration": 108419900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "equipestefanini@gmail.com",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoEmail(String)"
});
formatter.result({
  "duration": 123643900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefgh",
      "offset": 23
    }
  ],
  "location": "Register.digitoNoCampoSenha(String)"
});
formatter.result({
  "duration": 87654200,
  "status": "passed"
});
formatter.match({
  "location": "Register.clicoNoBotaoCadastrar()"
});
formatter.result({
  "duration": 37783200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    }
  ],
  "location": "Register.deletoUsuario(String)"
});
formatter.result({
  "duration": 52896500,
  "status": "passed"
});
formatter.match({
  "location": "Register.verificoTabelaComApenasOSegundoUsuario()"
});
formatter.result({
  "duration": 618027300,
  "status": "passed"
});
formatter.after({
  "duration": 773258900,
  "status": "passed"
});
});