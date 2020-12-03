  var numeroAleatorio= Math.floor(Math.random() * 100) + 1;
    
  var palpite = document.querySelector ('.palpites');
  var ultimoResultado = document.querySelector ('.ultimoResultado');
  var baixoOuAlto = document.querySelector ('.baixoOuAlto');

  var envioPalpite = document.querySelector ('.envioPalpite');
  var campoPalpite = document.querySelector ('.campoPalpite');

  var contagemPalpite = 1;
  var botaoReinicio;


// Conferir palpite
  function conferirPalpite() {

    var palpiteUsuário = Number(campoPalpite.value);
    if (contagemPalpite === 1){
        palpite.textContent = 'Palpites anteriores: ';
    }
    palpite.textContent += palpiteUsuário + ' ';

    if (palpiteUsuário === numeroAleatorio ){
      ultimoResultado.textContent = 'Parabéns! Você acertou!';
      ultimoResultado.style.backgroundColor = 'green';
      baixoOuAlto.textContent = '';
      ConfigFimDeJogo();

    } else if(contagemPalpite === 10){
      ultimoResultado.textContent = 'FIM DE JOGO'
      baixoOuAlto.textContent = '';
      ConfigFimDeJogo();
    } else {
      ultimoResultado.textContent = 'Errado!';
      ultimoResultado.style.backgroundColor = 'red';
      if (palpiteUsuário < numeroAleatorio){
        baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
      } else if (palpiteUsuário > numeroAleatorio){
        baixoOuAlto.textContent = 'Seu palpite está muito alto!';
      }
    }

    contagemPalpite++;
    campoPalpite.value = '';
    campoPalpite.focus();
  }

  envioPalpite.addEventListener ('click', conferirPalpite);

//  Final do jogo

  function ConfigFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'Reiniciar jogo';
    document.body.appendChild (botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo)
  }

  function reiniciarJogo(){
    contagemPalpite = 1;

    var ReiniciarParas = document.querySelectorAll('.resultadoParas p');
    for(var i = 0; i < ReiniciarParas.length ; i++){
      ReiniciarParas[i].textContent = '';

    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '',
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  }