const request = new XMLHttpRequest();
const url = 'http://localhost:3000/bovinos';

(function () {
    var x = document.getElementById("boitabela");
    x.style.display = "none";
})();

function tableshow() {
    var x = document.getElementById("boitabela");
    x.style.display = "block";
}

function consultadados() {
    if (document.getElementById("brincoc1").value) {
        consultarBrinco(document.getElementById("brincoc1").value);
    }else
    if(document.getElementById("nomec1").value){
        consultarNome(document.getElementById("nomec1").value);
    }

}
function consultarBrinco(brinco) {
    if (brinco) {
        request.open("GET", 'http://localhost:3000/bovinos/buscaBrinco' + '?' + 'brinco=' + brinco, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const dados = JSON.parse(request.responseText)
                console.log(dados.Brinco);
                request.abort();

                document.getElementById('1').innerHTML = brinco;
                document.getElementById('2').innerHTML = dados.Nome;
                document.getElementById('3').innerHTML = dados.Situacao;
                document.getElementById('4').innerHTML = dados.Sexo;
                document.getElementById('5').innerHTML = dados.BrincoMae;
                document.getElementById('6').innerHTML = dados.BrincoPai;
                document.getElementById('7').innerHTML = dados.Raca;
                document.getElementById('8').innerHTML = dados.DTNasc;
                document.getElementById('9').innerHTML = dados.DTPrenhes;
                document.getElementById('10').innerHTML = dados.DTUltimoParto;
                tableshow();
            }
        }
    }
}
function consultarNome(nome){
    if (nome) {
        request.open("GET", 'http://localhost:3000/bovinos/buscaBrincoNome' + '?' + 'nome=' + nome, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const dados = JSON.parse(request.responseText)
                request.abort();

                document.getElementById('1').innerHTML = dados.Brinco;
                document.getElementById('2').innerHTML = nome;
                document.getElementById('3').innerHTML = dados.Situacao;
                document.getElementById('4').innerHTML = dados.Sexo;
                document.getElementById('5').innerHTML = dados.BrincoMae;
                document.getElementById('6').innerHTML = dados.BrincoPai;
                document.getElementById('7').innerHTML = dados.Raca;
                document.getElementById('8').innerHTML = dados.DTNasc;
                document.getElementById('9').innerHTML = dados.DTPrenhes;
                document.getElementById('10').innerHTML = dados.DTUltimoParto;
                tableshow();
            }
        }
    }
}

function voltar() {
    location.href = "../index.html"
}