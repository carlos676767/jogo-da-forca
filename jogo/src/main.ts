
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

let array: string 
const percorrerEsorteia = () => {
  const chaves = Object.keys(meuObjeto);
  const sorteio = chaves[Math.floor(Math.random() * chaves.length)];
  const obter = meuObjeto[sorteio];
  array = obter
  console.log(array);
};
percorrerEsorteia()

const botao = document.querySelector("button");
const p = document.querySelector("p");
const input = document.querySelector("input") as HTMLInputElement;

const percorrerArray = () => {
  const meuInputValorString: string = input.value;
  console.log(meuInputValorString);
  
  for (let i = 0; i < array.length; i++) {
    if (meuInputValorString.includes(array[i])) {
      alert(`valor existe`);
    } else {
      alert(`nao existe`);
    }
  }
};

botao?.addEventListener("click", () => {
  percorrerArray();
});

