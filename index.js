//Boas Vindas 
alert(`Bem vindos às eleições de 2022 \nVote com conciência, pois só há uma chance para votar!!`);

//dados do usuário
var nome = prompt("Digite seu nome completo: ");
var cpf = "Digite seu cpf: ";

//variáveis contadoras dos candidatos e votos

var bolsonaro = 0;
var lula = 0;
var marina = 0;
var ciro = 0;
var white = 0;
var nul = 0;

//validar cpf (para aceitar somente números)

    function validarcpf(tenteNovamente){    //função de um parâmetro
        //enquanto for verdadeiro
        while (true){
            var ret = parseInt(prompt(cpf));    //variável que recebe o cpf
            if(!isNaN(ret)){    //condição que verifica se o cpf é um número ou não
                return ret;     //se for um número, retorne o próprio cpf
            }
            cpf = tenteNovamente;   //se não, exiba a mensagem de erro
        }
    }
    //que será produzida aqui
    //colocando o parâmetro na nossa função, que será a mensagem
    var erro = validarcpf("Error!! \n Por favor, digite número e tente novamente")


    //botões números
    function valores(num){  //função insere número no input
        
        var insert = document.getElementById('input').innerHTML;    //variável que pega o conteúdo do input
        document.getElementById('input').innerHTML = insert + num;  //concatenando com novos números ao apertar novos botões
    }

    function limpar(){
        document.getElementById('input').innerHTML = '';
        document.getElementById('images').innerHTML = '';
        document.getElementById('aviso').innerHTML = '';
        document.getElementById('btn').innerHTML = '';
    }

    //votar
    function votar(){
        var div = document.querySelector('#images');
        var aviso = document.querySelector('#aviso');
        var botoes = document.querySelector('#btn');
        var candidato = document.getElementById('input').innerHTML;
        
    //verificação dos candidatos
        if(candidato == 17){
            var img = new Image(200, 200);  //criando a imagem
            img.src = "img/bolsonaro-campos-do-jordao.jpg";
            
            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
        }
        else if(candidato == 13){
            var img = new Image(200, 200);
            img.src = "img/lula.jpg";

            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
        }
        else if(candidato == 22){
            var img = new Image(200, 200);
            img.src = "img/marina.jpg";

            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
            }
        else if(candidato == 35){
            var img = new Image(200, 200);
            img.src = "img/ciro.png";

            //criando os botões e seus valores
            var btnConf = document.createElement('button');
            var btnCancel = document.createElement('button');
            var valueConf = document.createTextNode('Confirmar');
            var valueCancel = document.createTextNode('Cancelar');

            //atribuindo eventos aos botões
            btnConf.setAttribute("onclick", "confirmar()");
            btnCancel.setAttribute("onclick", "cancelar()");

            //atribuindo os valores dos botões
            btnConf.appendChild(valueConf);
            btnCancel.appendChild(valueCancel);

            //adicionando o título dos botões
            btnConf.title = 'Confirmar';
            btnCancel.title = 'Cancelar';

            //atribuindo o elemento filho ao pai
            aviso.textContent = 'Tem certeza que esta é sua escolha?'
            div.appendChild(img);
            botoes.appendChild(btnConf);
            botoes.appendChild(btnCancel);
        }
    }
    
    //função do botão confirmar voto
    function confirmar(){   
        var num = document.getElementById('input').innerHTML;   //formato string

        //validação da escolha do usuário
            //switch
            switch (parseInt(num)){ //conversão para inteiro
                case 17:

                    bolsonaro++;    //contador adicionando quantidade de votos pra este candidato
                    alert('Voto computado com sucesso!!');
                    limpar();   // reutilizando a função que limpa a tela após o usuário votar
                    break;

                case 13:
                    
                    lula++; //contador adicionando quantidade de votos pra este candidato
                    alert('Voto computado com sucesso!!');
                    limpar();   // reutilizando a função que limpa a tela após o usuário votar
                    break;
                    
                case 22:
                    
                    marina++;   //contador adicionando quantidade de votos pra este candidato
                    alert('Voto computado com sucesso!!');
                    limpar();   // reutilizando a função que limpa a tela após o usuário votar
                    break;

                case 35:
                    
                    ciro++; //contador adicionando quantidade de votos pra este candidato
                    alert('Voto computado com sucesso!!');
                    limpar();   // reutilizando a função que limpa a tela após o usuário votar
                    break;

                default:
                    alert("Você não votou!! Escolha um dos candidatos, ou vote em branco ou nulo");
            }
    }

    //função do botão cancelar voto
    function cancelar(){
        limpar();
    }

    //função botão voto em branco
    function branco(){
        white++;
        alert("Você votou em branco");
    }

    //função botão voto em branco
    function Nulo(){
        nul++;
        alert("Você votou nulo");
    }

    function whitenull(){
        aviso.innerHTML = `Houve ${white} votos em Branco e <br> ${nul} votos nulo nesta eleição.`
       }

   function eleito(){
    if(bolsonaro > lula && bolsonaro > marina && lula > marina && marina > ciro){
             aviso.innerHTML = `O vencedor é o Bolsonaro <br> Lula em segundo <br> Marina em terceiro <br> Ciro Gomes em ultimo`
             var candidato = document.querySelector("#images");

             var img = new Image(200, 200);  //criando a imagem
             img.src = "img/bolsonaro-campos-do-jordao.jpg";

             candidato.appendChild(img);
        }
        if(bolsonaro > lula && bolsonaro > ciro && lula > ciro && ciro > marina){
            aviso.innerHTML = `O vencedor é o Bolsonaro <br> Lula em segundo <br> Ciro Gomes em terceiro <br> Marina em ultimo`

            var candidato = document.querySelector("#images");

             var img = new Image(200, 200);  //criando a imagem
             img.src = "img/bolsonaro-campos-do-jordao.jpg";

             candidato.appendChild(img);

           
       }
        else if(bolsonaro > marina && bolsonaro > lula && marina > lula && lula > ciro){
            aviso.innerHTML = `O vencedor é o Bolsonaro <br> Marina em segundo <br> Lula em terceiro <br> Ciro Gomes em ultimo`
            
            var candidato = document.querySelector("#images");

             var img = new Image(200, 200);  //criando a imagem
             img.src = "img/bolsonaro-campos-do-jordao.jpg";

             candidato.appendChild(img);
        }
        else if(bolsonaro > ciro && bolsonaro > lula && ciro > lula && lula > marina){
            aviso.innerHTML = `O vencedor é o Bolsonaro <br> Ciro em segundo <br> Lula em terceiro <br> Marina em ultimo`

            var candidato = document.querySelector("#images");

             var img = new Image(200, 200);  //criando a imagem
             img.src = "img/bolsonaro-campos-do-jordao.jpg";

             candidato.appendChild(img);

        }
        else if(bolsonaro > ciro && bolsonaro > lula && ciro > lula && marina > lula){
            aviso.innerHTML = `O vencedor é o Bolsonaro <br> Ciro Gomes em segundo <br> Marina em terceiro <br> Lula em ultimo`
            
            var candidato = document.querySelector("#images");

             var img = new Image(200, 200);  //criando a imagem
             img.src = "img/bolsonaro-campos-do-jordao.jpg";

             candidato.appendChild(img);
        }
        else if(lula > bolsonaro && lula > marina && bolsonaro > marina && marina > ciro){
            aviso.innerHTML = `O vencedor é o Lula <br> Bolsonaro em segundo <br> Marina em terceiro <br> Ciro Gomes em ultimo`

            var candidato = document.querySelector("#images");

             var img = new Image(200, 200);  //criando a imagem
             img.src = "img/lula.jpg";

             candidato.appendChild(img);

        }
        else if(lula > ciro && lula > bolsonaro && ciro > bolsonaro && bolsonaro > marina){
            aviso.innerHTML = `O vencedor é o Lula <br> Ciro Gomes em segundo <br> Bolsonaro em terceiro <br> Marina em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/lula.jpg";

             candidato.appendChild(img);
        }
        else if(lula > marina && lula > bolsonaro && marina > bolsonaro && bolsonaro > ciro){
            aviso.innerHTML = `O vencedor é o Lula <br> Marina em segundo <br> Bolsonaro em terceiro <br> Ciro Gomes em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/lula.jpg";

             candidato.appendChild(img);
        }
        else if(lula > marina && lula > bolsonaro && marina > bolsonaro && ciro > bolsonaro){
            aviso.innerHTML = `O vencedor é o Lula <br> Marina em segundo <br> Ciro Gomes em terceiro <br> Bolsonaro em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/lula.jpg";

             candidato.appendChild(img);
        }
        else if(lula > ciro && lula > marina && ciro > marina && marina > bolsonaro){
            aviso.innerHTML = `O vencedor é o lula <br> Ciro em segundo <br> Marina em terceiro <br> Bolsonaro em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/lula.jpg";

             candidato.appendChild(img);
        }
        else if(marina > ciro && marina > bolsonaro && ciro > bolsonaro && bolsonaro > lula){
            aviso.innerHTML =  `O vencedor é a Marina <br> Ciro Gomes em segundo <br> Bolsonaro em terceiro <br> Lula em ultimo`

            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/marina.jpg";

             candidato.appendChild(img);
        }
        else if(marina > bolsonaro && marina > ciro && bolsonaro > ciro && ciro > lula){
            aviso.innerHTML =  `O vencedor é a Marina <br> Bolsonaro em segundo <br> Ciro Gomes em terceiro <br> Lula em ultimo`

            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/marina.jpg";

             candidato.appendChild(img);
        }
        else if(marina > bolsonaro && marina > lula && bolsonaro > lula && lula > ciro){
            aviso.innerHTML =  `O vencedor é a Marina <br> Bolsonaro em segundo <br> Lula em terceiro <br> Ciro Gomes em ultimo`

            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/marina.jpg";

             candidato.appendChild(img);
        }
        else if(marina > lula && marina > ciro && lula > ciro && ciro > bolsonaro){
            aviso.innerHTML =  `O vencedor é a Marina <br> Lula em segundo <br> Ciro Gomes em terceiro <br> Bolsonaro em ultimo`

            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/marina.jpg";

             candidato.appendChild(img);
        }
        else if(marina > ciro && marina > lula && ciro > lula && lula > bolsonaro){
            aviso.innerHTML =  `O vencedor é a Marina <br> Ciro Gomes em segundo <br> Lula em terceiro <br> Bolsonaro em ultimo`

            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/marina.jpg";

             candidato.appendChild(img);
        }
        else if(ciro > marina && ciro > lula && marina > lula && lula > bolsonaro){
            aviso.innerHTML = `O vencedor é o Ciro <br> Marina em segundo <br> Lula em terceiro <br> Bolsonaro em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/ciro.png";

             candidato.appendChild(img);
        }
        else if(ciro > lula && ciro > marina && lula > marina && marina > bolsonaro){
            aviso.innerHTML = `O vencedor é o Ciro <br> Lula em segundo <br> Marina em terceiro <br> Bolsonaro em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/ciro.png";

             candidato.appendChild(img);
        }
        else if(ciro > bolsonaro && ciro > lula && bolsonaro > lula && lula > marina){
            aviso.innerHTML = `O vencedor é o Ciro <br> Bolsonaro em segundo <br> Lula em terceiro <br> Marina em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/ciro.png";

             candidato.appendChild(img);
        }
        else if(ciro > bolsonaro && ciro > marina && bolsonaro > marina && marina > lula){
            aviso.innerHTML = `O vencedor é o Ciro <br> Bolsonaro em segundo <br> Marina em terceiro <br> Lula em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/ciro.png";

             candidato.appendChild(img);
        }
        else if(ciro > marina && ciro > bolsonaro && marina > bolsonaro && bolsonaro > lula){
            aviso.innerHTML = `O vencedor é o Bolsonaro <br> Lula em segundo <br> Marina em terceiro <br> Ciro Gomes em ultimo`
            
            var img = new Image(200, 200);  //criando a imagem
             img.src = "img/ciro.png";

             candidato.appendChild(img);
        }
        //empates
        else if(bolsonaro == lula && marina > ciro){
            aviso.innerHTML = `Houve empate entre Lula e Bolsonaro <br> Haverá segundo turno! <br> Marina ficou em segundo lugar e Ciro Gomes em terceiro`
        }
        else if(bolsonaro == lula && ciro > marina){
            aviso.innerHTML = `Houve empate entre Lula e Bolsonaro <br> Haverá segundo turno! <br> Ciro Gomes ficou em segundo lugar e Marina em terceiro`
        }
        else if(bolsonaro == ciro && lula > marina){
            aviso.innerHTML = `Houve empate entre Ciro e Bolsonaro <br> Haverá segundo turno! <br> Lula ficou em segundo lugar e Marina em terceiro`
        }
        else if(bolsonaro == ciro && marina > lula){
            aviso.innerHTML = `Houve empate entre Ciro e Bolsonaro <br> Haverá segundo turno! <br> Marina ficou em segundo lugar e Lula em terceiro`
        }
        else if(bolsonaro == marina && lula > ciro){
            aviso.innerHTML = `Houve empate entre Marina e Bolsonaro <br> Haverá segundo turno! <br> Lula ficou em segundo lugar e Ciro Gomes em terceiro`
        }
        else if(bolsonaro == marina && ciro > lula){
            aviso.innerHTML = `Houve empate entre Marina e Bolsonaro <br> Haverá segundo turno! <br> Lula ficou em segundo lugar e Ciro Gomes em terceiro`
        }
        else if(lula == marina && bolsonaro > ciro){
            aviso.innerHTML = `Houve empate entre Marina e Lula <br> Haverá segundo turno! <br> Bolsonaro ficou em segundo lugar e Ciro Gomes em terceiro`
        }
        else if(lula == marina && ciro > bolsonaro){
            aviso.innerHTML = `Houve empate entre Marina e Lula <br> Haverá segundo turno! <br> Ciro Gomes ficou em segundo lugar e Bolsonaro em terceiro`
        }
        else if(lula == ciro && marina > bolsonaro){
            aviso.innerHTML = `Houve empate entre Ciro Gomes e Lula <br> Haverá segundo turno! <br> Marina ficou em segundo lugar e Bolsonaro em terceiro`
        }
        else if(lula == ciro && bolsonaro > marina){
            aviso.innerHTML = `Houve empate entre Ciro Gomes e Lula <br> Haverá segundo turno! <br> Bolsonaro ficou em segundo lugar e Marina em terceiro`
        }
        else if(marina == ciro && bolsonaro > lula){
            aviso.innerHTML = `Houve empate entre Ciro Gomes e Marina <br> Haverá segundo turno! <br> Bolsonaro ficou em segundo lugar e Lula em terceiro`
        }
        else if(marina == ciro && lula > bolsonaro){
            aviso.innerHTML = `Houve empate entre Ciro Gomes e Marina <br> Haverá segundo turno! <br> Lula ficou em segundo lugar e Bolsonaro em terceiro`
        }
   }

   