
// Função para realizar a soma
function MostrarNota() {
    var resultado = parseFloat(document.getElementById("numero1").value);
    // Armazena o resultado e o nome no localStorage separadamente
    localStorage.setItem("resultado", resultado.toFixed(3));
}

function MostrarNome() {
    var nomeAtleta = document.getElementById("nome").value;
    localStorage.setItem("nome", nomeAtleta);

}

// Função para exibir o resultado na segunda tela
function exibirResultado() {
    var resultado = localStorage.getItem("resultado");
    var nomeAtleta = localStorage.getItem("nome");
    var resultadoElement = document.getElementById("resultado");
    var resultadoNome = document.getElementById("nomeA");
    if (resultadoElement && resultadoNome) {
        resultadoElement.textContent = resultado;
        resultadoNome.textContent = nomeAtleta;
    }
}

// Atualiza o resultado na segunda tela quando a página for carregada
window.addEventListener("DOMContentLoaded", function () {
    exibirResultado();
});

// Atualiza o resultado em tempo real quando houver alterações no localStorage
window.addEventListener("storage", function () {
    exibirResultado();
});

// Função para limpar os valores do nome e do resultado
function limparValores1() {
    localStorage.setItem("resultado", "");
    localStorage.setItem("nome", "");
    exibirResultado(); // Atualiza a exibição do resultado na segunda tela
}

// Atualiza o resultado na segunda tela quando a página for carregada
window.addEventListener("DOMContentLoaded", function () {
    exibirResultado();
});

// Atualiza o resultado em tempo real quando houver alterações no localStorage
window.addEventListener("storage", function () {
    exibirResultado();
});

function exibirNome() {
    var selectElement = document.getElementById("menuNomes");
    var nomeSelecionado = document.getElementById("nomeSelecionado");
    var nome = selectElement.options[selectElement.selectedIndex].text

    if (nome !== "") {
        nomeAtleta = nome;
        localStorage.setItem("nome", nomeAtleta);
    } else {
        nomeSelecionado.textContent = "Nenhum nome selecionado";
    }
}

// Função para calcular a média e atribuir valor ao campo MFGA
function calcularMediaGA() {
    var m1GA = parseFloat(document.getElementById("M1GA").value);
    var m2GA = parseFloat(document.getElementById("M2GA").value);
    var m3GA = parseFloat(document.getElementById("M3GA").value);
    var m4GA = parseFloat(document.getElementById("M4GA").value);

    var mediaGA = (m1GA + m2GA + m3GA + m4GA) / 4;

    document.getElementById("MFGA").value = mediaGA.toFixed(2);

    //calcularNotaFinal(); // Calcula a nota final automaticamente
}

// Função para calcular a média e atribuir valor ao campo MFGB
function calcularMediaGB() {
    var m1GB = parseFloat(document.getElementById("M1GB").value);
    var m2GB = parseFloat(document.getElementById("M2GB").value);
    var m3GB = parseFloat(document.getElementById("M3GB").value);

    var mediaGB = (m1GB + m2GB + m3GB) / 3;

    document.getElementById("MFGB").value = mediaGB.toFixed(3);

    //calcularNotaFinal(); // Calcula a nota final automaticamente
}


// Função para calcular a nota final e exibir o valor em "resultado"
function calcularNotaFinal() {
    var mediaGA = parseFloat(document.getElementById("MFGA").value);
    var mediaGB = parseFloat(document.getElementById("MFGB").value);

    var notaFinal = mediaGA + mediaGB;

    localStorage.setItem("resultado", notaFinal.toFixed(3));
}

// Função para limpar os valores do nome, resultado e campos de entrada de média
function limparValores() {
    localStorage.setItem("resultado", "");
    localStorage.setItem("nome", "");
    exibirResultado(); // Atualiza a exibição do resultado na segunda tela

    document.getElementById("MFGA").value = "";
    document.getElementById("MFGB").value = "";

    document.getElementById("M1GA").value = "";
    document.getElementById("M2GA").value = "";
    document.getElementById("M3GA").value = "";
    document.getElementById("M4GA").value = "";

    document.getElementById("M1GB").value = "";
    document.getElementById("M2GB").value = "";
    document.getElementById("M3GB").value = "";
}

// Chama as funções de cálculo de média assim que os campos de entrada forem modificados
document.getElementById("M1GA").addEventListener("input", calcularMediaGA);
document.getElementById("M2GA").addEventListener("input", calcularMediaGA);
document.getElementById("M3GA").addEventListener("input", calcularMediaGA);
document.getElementById("M4GA").addEventListener("input", calcularMediaGA);

document.getElementById("M1GB").addEventListener("input", calcularMediaGB);
document.getElementById("M2GB").addEventListener("input", calcularMediaGB);
document.getElementById("M3GB").addEventListener("input", calcularMediaGB);
