import Swal from 'sweetalert2';
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
const input = document.querySelector("input") as HTMLInputElement;
const img = document.querySelectorAll(`img`);
let contador = 0;
let valorExiste = false;
const verificarValoreExistes = () => {
  const meuInputValorString = input.value;
  for (let j = 0; j < array.length; j++) {
    if (meuInputValorString.includes(array[j])) {
      console.log(`o valor existe`);
      valorExiste = true;
      break;
    }
  }
  atualizarContadorImagens()
  
};

const aparecerImagem1 = () => {
  img[0].style.display = "block"
}

const resetarImagens = () => {
   for (let j = 2; j < img.length; j++) {
    img[j].style.display = "none"
    aparecerImagem1()
    console.log(img[j]);
   }
}

const resetarContador = () => {
  contador = 0
}

const mensagemPerdeu = () => {
  Swal.fire({
    title: "Custom width, padding, color, background.",
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });
}

const atualizarContadorImagens = () => {
  if (!valorExiste) {
    ++contador;
    console.log(contador);
  }

  if (contador == 1) {
    img[0].style.display = "none";
    img[1].style.display = "block";
  } else if (contador == 2) {
    img[1].style.display = "none";
    img[2].style.display = "block";
  } else if (contador == 3) {
    img[2].style.display = "none";
    img[3].style.display = "block";
  } else if (contador == 4) {
    img[3].style.display = "none";
    img[4].style.display = "block";
  } else if (contador == 5) {
    img[4].style.display = "none";
    img[5].style.display = "block";
  } else if (contador === 6) {
    img[5].style.display = "none";
    img[6].style.display = "block";
    mensagemPerdeu()
    resetarImagens()
    resetarContador()
  }
};


botao?.addEventListener("click", () => {
  verificarValoreExistes();
});