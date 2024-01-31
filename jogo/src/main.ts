
type Palavras = {
  palavra1: string;
  palavra2: string;
  palavra3: string;
  palavra4: string;
  palavra5: string;
  palavra6: string;
  [key: string]: string;
};

const meuObjeto: Palavras = {
  palavra1: "banana",
  palavra2: "uva",
  palavra3: "abacate",
  palavra4: "arroz",
  palavra5: "ovo",
  palavra6: "maca",
};

const array: string[] = []
const percorrerEsorteia = () => {
  const chaves = Object.keys(meuObjeto);
  const sorteio = chaves[Math.floor(Math.random() * chaves.length)];
  const obter = meuObjeto[sorteio];
  array.push(obter)
};
percorrerEsorteia()

const botao = document.querySelector("button")
const p = document.querySelector("p")
const input = document.querySelector("input")?.value

const percorrerArray = () => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

botao?.addEventListener("click", () => {

})

