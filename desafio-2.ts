// Como podemos melhorar o esse código usando TS? 

interface pessoa{
    nome: string,
    idade: number,
    profissao: Profissao
}
enum Profissao{
    atriz,
    padeiro
}

let pessoa1: pessoa = {
    nome : "maria",
    idade : 29,
    profissao : Profissao.atriz
};
let pessoa2: pessoa = {
nome : "roberto",
idade : 19,
profissao : Profissao.padeiro
};

let pessoa3 : pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.atriz
};

let pessoa4:pessoa = {
    nome : "carlos",
    idade : 19,
    profissao : Profissao.padeiro
}