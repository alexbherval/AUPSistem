REGRAS DE NEGOCIO PARA FORMULARIO CADASTRO DE PESSOAS


REGRA DE NEGÓCIO
  Todas as pessoas necessitam de cadastro para qualquer interação na ONG.
  O cadastro é realizado de forma individual para cada pessoa, incluindo menor de idade.

  No sistema tudo sera tratado como entidade, desta forma teremos as entidades:
  => Pessoa
  => Família
  => Projeto

  As regras são diferentes para cada entidade mas relacionam entre si.

    ENTIDADE PESSOA:

    => Uma pessoa que mora sozinha é considerada uma família para fins de
    cadastramento;

    => Esta entidade é composta por uma serie de dados que definem as regras de negócio e
    as relações entre as demandas do sistema, subdividindo-se em colections ou tabelas, que segem
    as segintes regras:
    => Uma pessoa pode ter:
       --Apenas um domicilio;
       --Um ou mais contatos, incluindo email, insta, face e etc;



    PESSOA: {
      ID_PESSOA: 
      ID_FAMILIA:
      NOME:
      SOBRENOME:
      DATA_NASC:
      COR:
      PORTADOR_DEFICIENCIA:
      GENERO:
      ESTADO_CIVIL:
      PROFISSÃO:
      STATUS_OCUPACIONAL:
      NOME_PAI:
      MOME_MAE:
      NUMERO_RES
      PROVEDOR: (Este campo define se é o responsvél financeiro)
      RENDA_FAMILIAR:
    },

    DOCUMENT: {
      ID_DOCUMENT:
      ID_PESSOA
      CPF:
      RG:
      RN: (REGISTRO DE NASCIMENTO)
      NIS:
      AUX_BRASIL:
      AUX_EMENGENCIAL:
      BOLSA_FAMILIA:
      BPC: (Beneficio de Prestação Continuada)
      PERTI: (Programa de Erradicação do Trabalho Infantil)
      GARANTIA_SAFRA:
      SEGURO_DEFESO:
    },

    ENDERECO: {
      ID_END:
      ID_PESSOA:
      CEP:
      LOGRADOURO:
      BAIRRO:
      MUNICIPIO:
      ESTADO:
      PONTO_REF:
    },

    CONTATO {
      ID_CONTATO:
      ID_PESSOA:
      EMAIL:
      CELULAR:
      FIXO:
      FACEBOOK:
      INSTAGRAN:
      PAGE:
    },


    ENTIDADE FAMILIA

    => É a unidade nuclear composta por uma ou mais pessoas, eventualmente ampliada
    por outras que contribuam para o rendimento, ou tenham despesas atendidas, desde que
    moradores em um domicílio. Assim, mesmo as pessoas que não sejam parentes, mas
    dividam as rendas e despesas de um domicílio são, para o Cadastro Único, uma família.
    Então:

    => Uma pessoa que mora sozinha é considerada uma família para fins de
    cadastramento;

    => Parentes, ou mesmo não parentes, que residem num mesmo domicílio e partilham
    as rendas e despesas são considerados uma só família.
    Há a possibilidade de que existam famílias conviventes no mesmo domicílio. Ou seja,
    dois ou mais grupos familiares que residem no mesmo domicílio, mas não compartilham
    rendas ou despesas. Nesses casos, cada família deverá ser cadastrada separadamente. Por
    
    => Exemplo: considere um casal com um filho. Esse filho se casa e continua morando no
    mesmo domicílio dos pais, mas sem compartilhar renda com eles, nem depender da renda
    de seus pais. Temos, então, duas famílias nucleares diferentes que chamamos de famílias
    conviventes

    COMPOSIÇÃO DA ENTIDADE FAMILIA

    FAMILIA {
      ID_FAMILIA:
      NOME_FAMILIA: (Sera uma concatenação entre cinco primeiros digitos cpf do respensavel com sobrenome tambem do responsavel)
      RENDA_FAMILIAR:
      QUANT_DEPENDENTES:
            
    }

    ENTIDADE PROJETO:
    => ESTA ENDIDADE É RESPONSAVEL PELO FLUXO DA APLICAÇÃO, AQUI FICA REGISTRADA TODAS AS MOVIMENTAÇÕES
    DAS FAMILIAS OU PESSOAS.

    COMPOSIÇÃO DA ENTIDADE PROJETO

    PROJETO {
      NOME:
      AUTOR:
      OBJETIVO:
      VOLUNTARIOS:
      DESCRITIVO_PROJETO:
      URL_UPLOADS_PROJETO:
      CUSTO_INICIAL:
      CUSTO_FINAL:
      CUSTO_POR_FAMILIA:
      PESSOA_ATENDIDA:
    },

 
