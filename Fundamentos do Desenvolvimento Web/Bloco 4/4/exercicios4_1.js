let info = [
    {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    }
];

info[1] =
{
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
console.log(`Bem-vinda, ${info[0].personagem}`);

info[0]['recorrente'] = 'Sim';

for (let key in info) {
    console.log(key);
}

for (let value in info) {
    console.log(info[value]);
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama "${leitor.livrosFavoritos[0].titulo}".`)

leitor.livrosFavoritos[1] =
{
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
console.log(`${leitor.nome} já tem ${leitor.livrosFavoritos.length} livros favoritos.`)