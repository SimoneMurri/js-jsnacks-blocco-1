const output = document.getElementById('output');

for (let i = 1; i <= 6; i++) {
    numero = i;

    if (numero %2 === 0) {
        output.innerHTML += '<span style="color: green;">' + numero + '</span> ';
    } else {
        output.innerHTML += '<span style="color: yellow;">' + numero + '</span> ';
    }
}