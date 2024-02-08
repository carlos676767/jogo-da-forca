import Swal from "sweetalert2";

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

let receberValor: string = " ";

const percorrerEsorteia = () => {
  const chaves = Object.keys(meuObjeto);
  const sorteio = chaves[Math.floor(Math.random() * chaves.length)];
  const obter = meuObjeto[sorteio];
  receberValor = obter;
};
percorrerEsorteia();

const array = receberValor.split("");
console.log(array);
let texto = document.querySelector("p") as HTMLParagraphElement;

const DicaAoUsuario = () => {
  const copiarArray = array.slice().join("");
  if (copiarArray.includes("banana")) {
    texto.textContent = "DICA; Fruta amarela";
  } else if (copiarArray.includes("uva")) {
    texto.textContent = "DICA; E roxa(o)";
  } else if (copiarArray.includes("abacate")) {
    texto.textContent = "DICA;E algo verde que se come";
  } else if (copiarArray.includes("arroz")) {
    texto.textContent = "DICA; E um grao";
  } else if (copiarArray.includes("ovo")) {
    texto.textContent = "DICA; Redondo e cabe na boca";
  } else if (copiarArray.includes("maca")) {
    texto.textContent = "DICA; e vermelho";
  }
};

DicaAoUsuario();

const img = document.querySelectorAll(`img`);
let contador = 0;
let valorExiste = false;
let obterValorBotao: string;
let contarPalavrasCertas: number = 0;

const resetarContadorPalavras = () => {
  contarPalavrasCertas = 0;
};

const alertaVencedor = () => {
  Swal.fire({
    title: "Prabens!",
    text: "*Parabéns pela vitória! Você é um campeão!🏆🎉",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};

const verificarValoreExistes = () => {
  for (let j = 0; j < array.length; j++) {
    if (obterValorBotao.includes(array[j])) {
      ++contarPalavrasCertas;
      const vencerPartida = () => {
        if (contarPalavrasCertas === array.length) {
          resetarContadorPalavras();
          resetarImagens();
          alertaVencedor();
        }
      };
      vencerPartida();
      valorExiste = true;
    }
  }
  atualizarContadorImagens();
};

const aparecerImagem1 = () => {
  img[0].style.display = "block";
};

const resetarImagens = () => {
  for (let j = 2; j < img.length; j++) {
    img[j].style.display = "none";
    aparecerImagem1();
    console.log(img[j]);
  }
};

const resetarContador = () => {
  contador = 0;
};

const mensagemPerdeu = () => {
  Swal.fire({
    title: "Você consegue fazer <br> melhor 😞",
    text: "Tente novamente",
  });
};

const atualizarContadorImagens = () => {
  if (!valorExiste) {
    ++contador;
    console.log(`palavras que nao existem ${contador}`);
  }

  switch (contador) {
    case 1:
      img[0].style.display = "none";
      img[1].style.display = "block";
      break;
    case 2:
      img[1].style.display = "none";
      img[2].style.display = "block";
      break;
    case 3:
      img[2].style.display = "none";
      img[3].style.display = "block";
      break;
    case 4:
      img[3].style.display = "none";
      img[4].style.display = "block";
      break;
    case 5:
      img[4].style.display = "none";
      img[5].style.display = "block";
      break;
    case 6:
      img[5].style.display = "none";
      img[6].style.display = "block";
      mensagemPerdeu();
      resetarImagens();
      resetarContador();
      break;
    default:
      break;
  }
};

const adicionarAudiooBody = () => {
  const novoAudio = new Audio("audio/somDefundo.mp3");
  const obterBody = document.body;
  obterBody.appendChild(novoAudio);
  novoAudio.autoplay = true;
};

adicionarAudiooBody();

const botoes = document.querySelectorAll("button");
botoes.forEach((botao) => {
  const colocarAudioNoBotao = () => {
    const esteAudioVaiNoBotao = new Audio("audio/audiobotao.mp3");
    botao.appendChild(esteAudioVaiNoBotao);
    esteAudioVaiNoBotao.play();
  };
  botao.addEventListener("click", () => {
    obterValorBotao = botao.value;
    verificarValoreExistes();
    colocarAudioNoBotao();
  });
});
