const livrosPorCategoria = [

    {
        categoria: "Riqueza",
        livros: [
            {
                titulo: "Os segredos da mente milionaria",
                autor: "T. Harv Eker"
            },
            {
                titulo: "O homem mais rico da babilonia",
                autor: "George S. Clason"
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kyosaki"
            }
        ],
    },
    {
        categoria: "Inteligencia emocional",
        livros: [
            {
                titulo: "Você é insubstituivel",
                autor: "Augusto Cury"
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do seculo",
                autor: "Augusto Cury"
            },
            {
                titulo: "Os 7 habitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey"
            }

        ],
    }
]

let quantiaDeCategorias = livrosPorCategoria.length
console.log(quantiaDeCategorias)



for(let categoria of livrosPorCategoria){
    console.log("O total de livros da categoria: ", categoria.categoria);
    console.log("é de: ", categoria.livros.length, " livros");
}


function contarAutores(){
    let autores = [];

    for(let categoria of livrosPorCategoria){

        for(let livro of categoria.livros){
            if (autores.indexOf(livro.autor) == -1){
                autores.push(livro.autor);
            }

        }
    }
    console.log(autores.length);
}


function mostrarLivrosDoAutor(autor){
    let livros = [];

    for(let categoria of livrosPorCategoria){
        for(let livro of categoria.livros){
            if(livro.autor.toUpperCase() == autor.toUpperCase()){
                livros.push(livro.titulo);
            }
        }
    }
    console.log(`Os livros do autor ${autor} são: ${livros.join(", ")}`);
}

mostrarLivrosDoAutor("Augusto Cury");