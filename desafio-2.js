"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["atriz"] = 0] = "atriz";
    Profissao[Profissao["padeiro"] = 1] = "padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.padeiro
};
