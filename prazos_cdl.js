
//armazena a origem pesquisada avaliada como atrasada;
let origemAtrasada = [ ];

//armazena a data da origem pesquisada avaliada como atrasada
let origemAtrasadaData = [ ];

//armazena a origem pesquisada avaliada como dentro do Prazo
let origemNoPrazo = [ ];

//armazena a data da origem pesquisada avaliada como dentro do Prazo
let origemNoPrazoData = [ ];

//origens das expedicoes sedex
let sedexOrigem = ['CDD JUSCELINO KUBITSCHEK',
'CDD MECEJANA',
'CDD SÃO SEBASTIÃO',
'CDD SEIS DE AGOSTO',
'CDD TUBARÃO',
'CEE JOÃO PESSOA',
'CEE NATAL',
'CEE PALMAS',
'CEE PORTO VELHO',
'CEE PRESIDENTE PRUDENTE',
'CEE RIO BRANCO',
'CEE SANTOS',
'CTCE ARACAJU',
'CTCE BAURU',
'CTCE BELÉM',
'CTCE BELO HORIZONTE',
'CTCE CAMPO GRANDE',
'CTCE CUIABÁ',
'CTCE CURITIBA',
'CTCE FORTALEZA',
'CTCE GOIÂNIA',
'CTCE INDAIATUBA',
'CTCE JUIZ DE FORA',
'CTCE LONDRINA',
'CTCE MACEIO',
'CTCE MANAUS',
'CTCE PORTO ALEGRE',
'CTCE RIBEIRAO PRETO',
'CTCE S JOSE RIO PRETO',
'CTCE SALVADOR',
'CTCE SÃO LUÍS',
'CTCE TERESINA',
'CTCE UBERABA',
'CTCE UBERLÂNDIA',
'CTCE VARGINHA',
'CTCE VILA MARIA',
'CTCE VITÓRIA',
'CTE BENFICA',
'CTE BLUMENAU/GTURN03',
'CTE BRASÍLIA',
'CTE CAJAMAR',
'CTE FLORIANÓPOLIS',
'CTE JAGUARÉ',
'CTE RECIFE',
'CTE SÃO GONÇALO',
'CTE SÃO JOSÉ DOS CAMPOS',
'CTE SAÚDE',
'TECA GUARULHOS'
];

//prazos sedexOrigem
let prazosSedex = [1,
1,
1,
1,
1,
1,
1,
1,
2,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
0,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
1,
];
//origens PAC possíveis
let pacOrigem = ['CDD JUSCELINO KUBITSCHEK',
'CDD MECEJANA',
'CDD SÃO SEBASTIÃO',
'CDD SEIS DE AGOSTO',
'CEE FEIRA DE SANTANA',
'CEE PALMAS',
'CEE PASSO FUNDO',
'CEE SANTOS',
'CTCE ARACAJU',
'CTCE BAURU',
'CTCE BELÉM',
'CTCE BELO HORIZONTE',
'CTCE CAMPO GRANDE',
'CTCE CUIABÁ',
'CTCE CURITIBA',
'CTCE FORTALEZA',
'CTCE GOIÂNIA',
'CTCE INDAIATUBA',
'CTCE JUIZ DE FORA',
'CTCE LONDRINA',
'CTCE MACEIO',
'CTCE MANAUS',
'CTCE NATAL',
'CTCE PORTO ALEGRE',
'CTCE RIBEIRAO PRETO',
'CTCE SALVADOR',
'CTCE S JOSE RIO PRETO',
'CTCE SÃO LUÍS',
'CTCE TERESINA',
'CTCE UBERABA',
'CTCE UBERLÂNDIA',
'CTCE VARGINHA',
'CTCE VILA MARIA',
'CTCE VITÓRIA',
'CTE BENFICA',
'CTE BLUMENAU/GTURN03',
'CTE BRASÍLIA',
'CTE CAJAMAR',
'CTE FLORIANÓPOLIS',
'CTE JAGUARÉ',
'CTE RECIFE',
'CTE SÃO JOSÉ DOS CAMPOS',
'CTE SAÚDE',
'TECA RODOANEL'
];

//respectivos prazos da variável origens PAC
let pacPrazos = [13,
21,
7,
8,
3,
5,
6,
4,
3,
5,
6,
4,
6,
6,
5,
0,
5,
5,
5,
6,
2,
19,
2,
6,
5,
3,
5,
3,
2,
5,
5,
5,
4,
6,
4,
5,
4,
4,
5,
4,
2,
5,
4,
4
];

//indice da Origem PAC
let indiceOrigem = pacOrigem.indexOf('CDD SEIS DE AGOSTO');

//indice origem sedex
let indiceOrigemSedex = sedexOrigem.indexOf('CDD SEIS DE AGOSTO');

//prazo com base no indice da origem PAC
let prazoCdlPac = pacPrazos[indiceOrigem];

//prazo com base no indice da origem SEDEX
let prazoCdlSedex = prazosSedex[indiceOrigemSedex];

//recebe a data atual
let dataAtual = new Date();

let diaAtual = dataAtual.getDate();

let mesAtual = dataAtual.getMonth()+1;

let anoAtual = dataAtual.getFullYear();

let prazoMaximo = dataAtual.getDate()-pacPrazos[indiceOrigem];

//array dos meses
let meses = [0,1,2,3,4,5,6,7,8,9,10,11];
//array com os o número dia dos meses
let qtdDias = [31,28,31,30,31,30,31,31,30,31,30,31];
//quantidade de dia com base no índice do meses
let indiceMes = meses.findIndex(y => y == dataAtual.getMonth());

function avaliaPrazoPac () {

  if (indiceOrigem !== -1 && prazoCdlPac > diaAtual && mesAtual - 1 < 0) {
    let diaRotulo = 31 + (diaAtual - prazoCdlPac);
    let anoRotulo = anoAtual - 1;
    return `Para a data de hoje, os Rótulos dos CDL PAC com origem no ${pacOrigem[indiceOrigem]} devem ter como data mais antiga: ${diaRotulo}/12/${anoRotulo}.`;
  }
  if (indiceOrigem !== -1 && prazoCdlPac > diaAtual && mesAtual > -1) {
    let diaRotulo = qtdDias[meses.findIndex(y => y == dataAtual.getMonth())-1] + (diaAtual - prazoCdlPac);
    mesAtual--;
    return `Para a data de hoje, os Rótulos dos CDL PAC com origem no ${pacOrigem[indiceOrigem]} devem ter como data mais antiga: ${diaRotulo}/${mesAtual}/${anoAtual}.`;
  }
  if (indiceOrigem !== -1 && prazoCdlPac < diaAtual) {
    let diaRotulo = diaAtual - prazoCdlPac;
    return `Para a data de hoje, os Rótulos dos CDL PAC com origem no ${pacOrigem[indiceOrigem]} devem ter como data mais antiga: ${diaRotulo}/${mesAtual}/${anoAtual}.`;
  }
  if (indiceOrigem === -1) {
    return 'Não existe previsão de que esta unidade faça expedição de carga PAC para o CTCE/FLA!';
  }

};
function avaliaPrazoSedex () {

  if (indiceOrigemSedex !== -1 && prazoCdlSedex > diaAtual && mesAtual - 1 < 0) {
    let diaRotulo = 31 + (diaAtual - prazoCdlSedex);
    let anoRotulo = anoAtual - 1;
    return `Para a data de hoje, os Rótulos dos CDL SEDEX com origem no ${sedexOrigem[indiceOrigemSedex]} devem ter como data mais antiga: ${diaRotulo}/12/${anoRotulo}.`;
  }
  if (indiceOrigemSedex !== -1 && prazoCdlSedex > diaAtual && mesAtual > -1) {
    let diaRotulo = qtdDias[meses.findIndex(y => y == dataAtual.getMonth())-1] + (diaAtual - prazoCdlSedex);
    mesAtual--;
    return `Para a data de hoje, os Rótulos dos CDL SEDEX com origem no ${sedexOrigem[indiceOrigemSedex]} devem ter como data mais antiga: ${diaRotulo}/${mesAtual}/${anoAtual}.`;
  }
  if (indiceOrigemSedex !== -1 && prazoCdlSedex < diaAtual) {
    let diaRotulo = diaAtual - prazoCdlSedex;
    return `Para a data de hoje, os Rótulos dos CDL SEDEX com origem no ${sedexOrigem[indiceOrigemSedex]} devem ter como data mais antiga: ${diaRotulo}/${mesAtual}/${anoAtual}.`;
  }
  if (indiceOrigemSedex === -1) {
    return 'Não existe previsão de que esta unidade faça expedição de carga SEDEX para o CTCE/FLA!';
  }

};
console.log(avaliaPrazoPac());
console.log(avaliaPrazoSedex());
console.log(indiceOrigemSedex !== -1);
console.log(prazoCdlSedex);
