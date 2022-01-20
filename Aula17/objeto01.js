let amigo = {nome: 'Rafael',
 sexo: 'M',
 peso: 61,
 engordar(p=0){
    console.log('Engordou')
    this.peso += p
 }   
}
amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso} kg.`)