class aluno{
    constructor(name,idade){
        this.name = name
        this.idade = idade
        this.notas = []
        this.media = 0
    }
    addNotas(){
        let nota = prompt("Adicionar nota")
        this.notas.push(nota)
        let opcao
        do{
        opcao = prompt("Adicionar outra nota ? S / N")
        switch(opcao){
            case 's':
                let nota = prompt("Adicionar nota")
                this.notas.push(nota)
                break;
            case 'n':
                alert("Saindo")
                break;
        }
        }while(opcao == 's')
    }
    mediaAluno(){
        this.media
        let num = 0
        for(let i = 0 ; i < this.notas.length ; i++){
            let nums = parseInt(this.notas[i])
            num = num + nums
        }
        this.media = num/this.notas.length
        alert(this.media)
    }
    aprovadoOuReprovado(){
        if(this.media >= 5){
            this.status = "Aprovado"
            alert("Aluno "+this.name+" foi Aprovado")
        }else{
            this.status = "Reprovado"
            alert("Aluno "+this.name+" foi Reprovado")
        }
    }
}
aluno1 = new aluno("João", 17)

