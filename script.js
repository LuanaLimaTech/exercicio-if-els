function media(){

    var valor1 = document.querySelector('#valor1');
    var valor2 = document.querySelector('#valor2');
    var valor3 = document.querySelector('#valor3');
    var valor4 = document.querySelector('#valor4');

    var v1 = parseInt(valor1.value);
    var v2 = parseInt(valor2.value);
    var v3 = parseInt(valor3.value);
    var v4 = parseInt(valor4.value);
    
    var media = (v1+v2+v3+v4)/4 ;

    alert(media);

}
//if(media < 4) {
// alert("Reprovado!");
//} else if(media < 4 && media <= 7) {
 //   alert("Recuperação");
//} else (media >= 7) {
//    alert("Aprovado!")
//} 

//CRIE 4 CAMPOS INPUTS E AO CHAMAR A FUNCAO MEDIA DEVE RECUPERAR OS VALORES
        // DOS 4 CAMPOS, DEVE SOMAR OS 4 VALORES E DIVIDIR POR 4.
        // EXIBA O VALOR DO RESULTADO PARA QUE ASSIM POSSAMOS EXIBIR A MEDIA.
        
        // UTILIZE O IF - SE A MEDIA < 4 ENTAO REPROVADO.
        // SE A MEDIA > 4 E < 7 RECUPERACAO
        // SE A MEDIA >= 7 APROVADO.
