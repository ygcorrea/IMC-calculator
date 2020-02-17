
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {

  event.preventDefault();
  const inputHeight = event.target.querySelector('#height')
  const inputWeight = event.target.querySelector('#weight')

  const height = Number(inputHeight.value);
  const weight = Number(inputWeight.value);

  if (!height) {
    setResult('Altura inválida', false);
    return;
  };

  if (!weight) {
    setResult('Peso inválido', false);
    return;
  };
  const imc = getImc(weight, height);

  const imcLevel = getImcLevel(imc);
  
  const message = `Seu IMC é ${imc} (${imcLevel})`;

  setResult(message, true);
  console.log(imc, imcLevel);
});

function getImcLevel(imc) {
  const level = ['Obesidade grau 3', 'Obesidade grau 2', 'Obesidade grau 1', 'Sobrepeso', 'Peso Normal', 'Abaixo do Peso']
  if( imc >= 40.0) return level[0];
  if( imc >= 34.9) return level[1];
  if( imc >= 29.9) return level[2];
  if( imc >= 24.9) return level[3];
  if( imc >= 18.5) return level[4];
  if( imc < 18.5)  return level[5];
  console.log('level', level);
  };

  function getImc(weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
};

function setResult(message, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';


  const paragraph = createParagraph();
  result.appendChild(paragraph)

  paragraph.innerHTML = message;
  if (!isValid) paragraph.classList.add('paragraph-result-failed');
  return paragraph.classList.add('paragraph-result-success');

};

function createParagraph(className) {
  const paragraph = document.createElement('p');
  return paragraph;
};
