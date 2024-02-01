
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

let receberValor: string = " "

const percorrerEsorteia = () => {
  const chaves = Object.keys(meuObjeto);
  const sorteio = chaves[Math.floor(Math.random() * chaves.length)];
  const obter = meuObjeto[sorteio];
  receberValor = obter
};
percorrerEsorteia()

const array = receberValor.split("").join(``)
console.log(array);
let texto = document.querySelector("p") as HTMLParagraphElement;

const DicaAoUsuario = () => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(`maca`)) {
      texto.textContent = ``
      console.log(`isto e uma maca`);

      
    }
  }
}

DicaAoUsuario()

const botao = document.querySelector("button");
const input = document.querySelector("input") as HTMLInputElement

const percorrerArray = () => {
  const meuInputValorString: string = input.value;
  let valorExiste = false
  for (let i = 0; i < array.length; i++) {
    if (meuInputValorString.includes(array[i])) {
      valorExiste = true
      console.log(`Valor existe`);
      break
    }else{
      console.log(`naO EXISTE`);
    }
  }
};


input.addEventListener("input", () => {
  percorrerArray()

});




