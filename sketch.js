let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "@Gabriel_HD_00");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(255, 255, 0));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return " Highlights do !Fantasma ip";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Highlights do !Fantasma ip";          
        } else{
         return "Highlights do !Fantasma ip";
        }
      } else {
        if (gostaDeFantasia) {
          return "Highlights do !Fantasma ip";
        } else {
          return "Highlights do !Fantasma ip";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Highlights do !Fantasma ip";
    } else {
      return "FREE FIRE World Cup 2018 ";
    }
  }
}
