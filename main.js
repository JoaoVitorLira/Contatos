class Contatos{
    constructor(nome, email, telefone, mensagem){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.mensagem = mensagem
    }
}
class GerenciadorContatos{
    constructor(){
        this.contatos = []
    }

    adcionarContatos(contato) {
        this.contatos.push(contato)
    }

    exibirContatos(){
        const listaContatos = document.querySelector('#contato-lista')
        
        listaContatos.innerHTML =  ''

        for(const contato of this.contatos){
            console.log('oi')
            const li = document.createElement('li')
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.mensagem}`
            listaContatos.appendChild(li)
        }
    }
}
const gerenciadorContatos = new GerenciadorContatos()

const contatoForm = document.getElementById('contatoForm'),
    nomeForm = document.getElementById('nome'),
    emailForm = document.getElementById('email'),
    telForm = document.getElementById('tel'),
    msgForm = document.getElementById('mensagem')
    mostrarContatos = document.getElementById('mostrarContatos'),
    ocultarContatos = document.getElementById('ocultarContatos'),
    listaContatos = document.getElementById('contato-lista')

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let nome = nomeForm.value
    let email = emailForm.value
    let telefone = telForm.value
    let mensagem = msgForm.value
    
    const contato = new Contatos(nome, email, telefone, mensagem)
    gerenciadorContatos.adcionarContatos(contato)
    
    nomeForm.value = ''
    emailForm.value = ''
    telForm.value = ''
    msgForm.value = ''
    console.log("oi")
})

mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos()
    listaContatos.style.display = 'block'
})
ocultarContatos.addEventListener('click', () => {
    listaContatos.style.display = 'none'
})