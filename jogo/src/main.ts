
type Palavras = {
  palavra1: string;
  palavra2: string;
  palavra3: string;
  [key: string]: string;
};

const meuObjeto: Palavras = {
  palavra1: "banana",
  palavra2: "uva",
  palavra3: "abacate",
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

