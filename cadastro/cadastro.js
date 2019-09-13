const request = new XMLHttpRequest();
const url = 'http://localhost:3000/bovinos';

var brinkB, nomB, sex, situation, brinkM, brinkP, racca, dtn, dtp, dtpp, dtup;

function consultarBrinco() {
    if (document.getElementById("brincoNome").value) {
        verificarCadastro(document.getElementById("brincoNome").value);
    }
}
function consultarNome() {
    if (document.getElementById("nomeBoi").value) {
        verificarCadastroNome(document.getElementById("nomeBoi").value);
    }
}
function consultarBrincoMae() {
    if (document.getElementById("brincoMae").value) {
        verificarMae(document.getElementById("brincoMae").value);
    }
}
function consultarBrincoPai() {
    if (document.getElementById("brincoPai").value) {
        verificarPai(document.getElementById("brincoPai").value);
    }
}
function verificarCadastro(brinco) {
    if (brinco) {
        request.open("GET", 'http://localhost:3000/bovinos/buscaBrinco' + '?' + 'brinco=' + brinco, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const dados = JSON.parse(request.responseText)
                request.abort();
                if (dados.Brinco == brinco) {
                    alert("Brinco cadastrado");
                    document.getElementById('brincoNome').value = ''
                }
            }
        }
    }
}
function verificarMae(brinco) {
    if (brinco) {
        request.open("GET", 'http://localhost:3000/bovinos/buscaBrinco' + '?' + 'brinco=' + brinco, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const dados = JSON.parse(request.responseText)
                request.abort();
                if (dados.Brinco == brinco) {
                    document.getElementById('brincoMCheck').value = "Animal Cadastrado";
                    document.getElementById('brincoSexMCheck').value = dados.Sexo;
                } else {
                    document.getElementById('brincoMCheck').value = "Animal não Cadastrado";
                }
            }
        }
    }
}
function verificarPai(brinco) {
    if (brinco) {
        request.open("GET", 'http://localhost:3000/bovinos/buscaBrinco' + '?' + 'brinco=' + brinco, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const dados = JSON.parse(request.responseText)
                request.abort();
                if (dados.Brinco == brinco) {
                    document.getElementById('brincoPCheck').value = "Animal Cadastrado";
                    document.getElementById('brincoSexPCheck').value = dados.Sexo;
                } else {
                    document.getElementById('brincoPCheck').value = "Animal não Cadastrado";
                }
            }
        }
    }
}
function verificarCadastroNome(nome) {
    if (nome) {
        request.open("GET", 'http://localhost:3000/bovinos/buscaBrincoNome' + '?' + 'nome=' + nome, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                const dados = JSON.parse(request.responseText)
                request.abort();
                if (dados.Nome == nome) {
                alert("Nome cadastrado");
                document.getElementById('nomeBoi').value = ''
                }
            }
        }
    }
}
function func() {
    var sexradio = document.getElementsByName("sexradio");
    if (sexradio[0].checked) {
        document.getElementById('dtprenhe').disabled = true;
        document.getElementById('dtNparto').disabled = true;
        document.getElementById('dtUparto').disabled = true;
    }
    if (sexradio[1].checked) {
        document.getElementById('dtPrenhe').disabled = false;
        document.getElementById('dtNparto').disabled = false;
        document.getElementById('dtUparto').disabled = false;
    }
}

function calcularParto() {
    var DataPren = new Date(document.getElementById('dtPrenhe').value);
    var DataProx = new Date(document.getElementById('dtNparto').value);

    var aux = new Date();
    aux.setMonth(DataPren.getMonth() + 9);
    DataProx.setTime(aux.getTime());
    document.getElementById("dtNparto").valueAsDate = new Date(aux.getTime())
}

function dados() {
    //brincoBoi
    var brincoB = document.getElementById("brincoNome").value;
    if (brincoB.trim() == '') {
        console.log("BRINCO VAZIO")
        alert("Brinco nao pode ser vazio");
    } else {
        console.log(brincoB);
        brinkB = brincoB;
    }

    //nomeBoi
    var nomeB = document.getElementById("nomeBoi").value;
    if (nomeB.trim() == '') {
        console.log("NOME VAZIO")
        alert("Nome nao pode ser vazio");
    } else {
        console.log(nomeB);
        nomB = nomeB;
    }

    //situação
    var sit = document.getElementById("selectSituacao");
    var textSit = sit.options[sit.selectedIndex].text;
    situation = textSit;
    console.log(textSit);

    //sexo
    var sexradio = document.getElementsByName("sexradio");
    if (sexradio[0].checked) {
        sexo = document.getElementById('r1').value;
        console.log(sexo);
        sex = sexo;
    }
    if (sexradio[1].checked) {
        sexo = document.getElementById('r2').value;
        console.log(sexo);
        sex = sexo;
    }

    //BrincoMãe
    var brincoM = document.getElementById("brincoMae").value;
    if (brincoM.trim() != '') {
        brinkM = brincoM;
    }

    //BrincoPai
    var brincoP = document.getElementById("brincoMae").value;
    if (brincoP.trim() != '') {
        brinkP = brincoP;
    }

    //Raça
    var rac = document.getElementById("selectRaca");
    var raca = rac.options[rac.selectedIndex].text;
    racca = raca;
    console.log(raca);

    //DataMacho
    if (sexradio[0].checked) {
        var DataNasc = document.getElementById('dataNasc').value;
        if (!DataNasc) {
            console.log("DATA NULA");
        } else {
            console.log(DataNasc);
            dtn = DataNasc;
        }
    }

    //DataFemea
    if (sexradio[1].checked) {
        var DataNasc = document.getElementById('dataNasc').value;
        var DataPren = document.getElementById('dtPrenhe').value;
        var DataUlti = document.getElementById('dtUparto').value;

        if (!DataNasc) {
            console.log("DATA NULA");
        } else {
            dtn = DataNasc;
            dtp = DataPren;
            dtup = DataUlti;
        }
    }
    salvar();
}
function salvar() {

    var map = {
        Brinco: brinkB,
        Nome: nomB,
        Situacao: situation,
        Sexo: sex,
        BrincoMae: brinkM,
        BrincoPai: brinkP,
        Raca: racca,
        DTNasc: dtn,
        DTPrenhes: dtp,
        DTUltimoParto: dtup
    }
    request.open("POST", 'http://localhost:3000/bovinos/registrarBovino');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(map));
    request.onreadystatechange = function () {
        request.abort();
    }
}
function voltar() {
    location.href = "../index.html"
}