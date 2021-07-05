function confirmar(){
    var filmesImagem = ["https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_UY268_CR3,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"]

    var filmesNome = ["Thor", "Thor: O Mundo Sombrio", "Thor: Ragnarok"]
    var fFilmes = document.getElementsByName("radFilme")
    var res =document.getElementById("filmesENomes")

    if (fFilmes[0].checked) {
        res.innerHTML = ("<h2>" + filmesNome[0] + "</h2>")
        res.innerHTML += ("<a href='https://www.disneyplus.com/pt-br/movies/thor-da-marvel-studios/1p4vdKzTuhzr'>" + "<h2>" + "<img src=" + filmesImagem[0] + ">" + "</h2>" + "</a>")
    } else if (fFilmes[1].checked) {
        res.innerHTML = ("<h2>" + filmesNome[1] + "</h2>")
        res.innerHTML += ("<a href='https://www.disneyplus.com/pt-br/movies/thor-o-mundo-sombrio-da-marvel-studios/ZHk7aM5xTbW7'>" + "<h2>" + "<img src=" + filmesImagem[1] + ">" + "</h2>" + "</a>")
    } else if (fFilmes[2].checked) {
        res.innerHTML = ("<h2>" + filmesNome[2] + "</h2>")
        res.innerHTML += ("<a href='https://www.disneyplus.com/pt-br/movies/thor-ragnarok-da-marvel-studios/3XqAT8UV8ojS'>" + "<h2>" + "<img src=" + filmesImagem[2] + ">" + "</h2>" + "</a>")
    }
}
// for (i = 0; i < filmesImagem.length; i++) {
//     document.write("<h2>" + filmesNome[i] + "</h2>")
//     document.write("<img src=" + filmesImagem[i] + ">")
// }

