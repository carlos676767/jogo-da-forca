import Swal from "sweetalert2";

type Palavras = {
  palavra1: string;
  palavra2: string;
  palavra3: string;
  palavra4: string;
  palavra5: string;
  palavra6: string;
  palavra7: string;
  [key: string]: string;
};

const meuObjeto: Palavras = {
  palavra1: "banana",
  palavra2: "uva",
  palavra3: "abacate",
  palavra4: "arroz",
  palavra5: "ovo",
  palavra6: "maca",
  palavra7: "carro", 
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
  }else if (copiarArray.includes("carro")) {
    texto.textContent = "DICA; tem 4 portas";
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
    title: "Parabens!",
    text: "Parabéns pela vitória! Você é um campeão!🏆🎉",
    imageUrl: "https://img.freepik.com/vetores-gratis/cartao-de-trofeu-pixelizado-com-letras_603843-3689.jpg?w=740&t=st=1707435155~exp=1707435755~hmac=0100cd7573db7379506a3f195b515f455aea449b11187252c802d427555c3980",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
};

const reiniciarApagina = () => {
  setTimeout(() => {
    location.reload()
  }, 5000);  
}

const verificarValoreExistes = () => {
  valorExiste = false
  for (let j = 0; j < array.length; j++) {
    if (obterValorBotao.includes(array[j])) {
      ++contarPalavrasCertas;
      valorExiste = true; 
      console.log(valorExiste);
    }
  }
  atualizarContadorImagens();
  const vencerPartida = () => {
    if (contarPalavrasCertas === array.length) {
      resetarContadorPalavras();
      alertaVencedor();
      reiniciarApagina();
    }
  };
  valorExiste = false
  vencerPartida(); 
};

const atualizarContadorImagens = () => {
  if (valorExiste === false) {
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
      resetarContador();
      reiniciarApagina();
      break;
    default:
      break;
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
    console.log(botao)
  };
  botao.addEventListener("click", () => {
    obterValorBotao = botao.value;
    verificarValoreExistes();
    colocarAudioNoBotao();
  });
});