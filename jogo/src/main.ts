
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

const array = receberValor.split("");
console.log(array);
let texto = document.querySelector("p") as HTMLParagraphElement;

const DicaAoUsuario = () => {
  const copiarArray = array.slice().join("");
  if (copiarArray.includes("banana")) {
    texto.textContent = "Fruta amarela";
  } else if (copiarArray.includes("uva")) {
    texto.textContent = "E roxa(o)";
  } else if (copiarArray.includes("abacate")) {
    texto.textContent = "E algo verde que se come";
  } else if (copiarArray.includes("arroz")) {
    texto.textContent = "E um grao";
  } else if (copiarArray.includes("ovo")) {
    texto.textContent = "Redondo e cabe na boca";
  } else if (copiarArray.includes("maca")) {
    texto.textContent = "e vermelho";
  }
};

DicaAoUsuario();

const botao = document.querySelector("button");
const input = document.querySelector("input") as HTMLInputElement
const imagem = document.querySelectorAll(`img`)

const percorrerArray = () => {
  const meuInputValorString: string = input.value;
  let valorExiste = false
  for (let i = 0; i < array.length; i++) {
    if (meuInputValorString.includes(array[i])) {
      valorExiste = true
      console.log(`Valor existe`);
      break
    }else{
      if (!valorExiste) {
       if (imagem[0].style.display === `block`) {
        imagem[0].style.display = `none`
       }else if (imagem[0].style.display === `none`) {
        imagem[1].style.display = `block`
       }
      }
    }
  }
};


input.addEventListener("input", () => {
  percorrerArray()

});
