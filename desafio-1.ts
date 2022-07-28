// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
    code : 10,
    name :'John'
};

interface employee{
    code: number,
    name: string
}

let employee1: employee = {
    code: 10,
    name: 'John'
}

let employee2: {
    code:number, name: string} = {
        name: 'John',
        code: 10
    }

