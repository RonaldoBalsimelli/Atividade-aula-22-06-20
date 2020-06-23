// ## Importe a biblioteca ##

let rs = require('readline-sync')

// ## Faça o código ##

let dia = rs.question('Qual dia voce nasceu? ');
let mes = rs.question('Agora, qual mes voce nasceu (Em numeral, por favor)? ');

mes = Number(mes);
dia = Number(dia);

if (dia >= 20 && mes == 1 || dia <= 18 && mes == 2) {

    console.log('Seu signo e Aquario. Independente, o aquariano preza muito por sua liberdade. Gosta de viajar, sair e conhecer pessoas novas. Tem uma mente aberta e gosta de tudo o que e inovador e moderno, desde roupas e tecnologia, ate mesmo atitudes comportamentais.');
}

if (dia >= 19 && mes == 2 || dia <= 20 && mes == 3) {

    console.log('Seu signo e Peixes. Este é o signo mais romantico do zodiaco. Sonhador e carinhoso, ele esta sempre preocupado com o bem estar dos outros. Sensivel e carinhoso, acredita em contos de fadas e acha que todos merecem um final feliz.');
}

if (dia >= 21 && mes == 3 || dia <= 19 && mes == 4) {

    console.log('Seu signo e Aries. Impulsivo, o ariano nao pensa muito sobre seus atos. E aquele que primeiro age, depois reflete. Agitado, precisa de muita atividade para gastar a energia, senao pode ficar agressivo e explosivo.');
}

if (dia >= 20 && mes == 4 || dia <= 20 && mes == 5) {

    console.log('Seu signo e Touro. Teimoso, o taurino é determinado e protetor. Precisa de seguranca e estabilidade para ser feliz, e conquista isso com muito trabalho e concentraçao. Carinhoso, o taurino pode ser ciumento com quem ama.');
}

if (dia >= 21 && mes == 5 || dia <= 20 && mes == 6) {

    console.log('Seu signo e Gemeos. Espontaneo e um pouco instavel, o geminiano e uma verdadeira caixinha de surpresas. Como e volatil, muitas vezes nem mesmo o geminiano se entende, mas o importante e que ele esta sempre de bom humor e em busca de aventuras.');
}

if (dia >= 21 && mes == 6 || dia <= 22 && mes == 7) {

    console.log('Seu signo e Cancer. Familia e a palavra-chave para o canceriano. Tranquilo e emotivo, gosta de ficar em casa, fazer programas com quem ama e curtir momentos com os parentes. Curioso, faz amizade com facilidade, mas pode ser um pouco sensivel.');
}

if (dia >= 23 && mes == 7 || dia <= 22 && mes == 8) {

    console.log('Seu signo e Leao. Este e signo que veio para brilhar. O leonino gosta de chamar a atencao e ser o centro do mundo, mas tambem e muito amavel e leal. Simpatico e comunicativo, o nativo de leao pode ser um pouco ciumento e inseguro.');
}

if (dia >= 23 && mes == 8 || dia <= 22 && mes == 9) {

    console.log('Seu signo e Virgem. Perspicaz e inteligente, o virginiano esta acostumado com o sucesso, por isso se cobra muito, assim como aos demais. Por isso, pode ser um pouco rigido e magoar quem ama. Timido, prefere programas tranquilos a grandes eventos.');
}

if (dia >= 23 && mes == 9 || dia <= 22 && mes == 10) {

    console.log('Seu signo e Libra. O libriano gosta do que e belo e harmonioso. Nao gosta de conflitos e por isso tenta ser imparcial em debates e brigas. Indeciso, pode demorar muito para escolher coisas simples, como o que comer ou vestir. Bom gosto define este signo.');
05}

if (dia >= 23 && mes == 10 || dia <= 22 && mes == 11) {

    console.log('Seu signo e Escorpiao. Determinado, o escorpiano vai ate o fim para conquistar os seus objetivos. Sensual e romantico, gosta de estar em relacionamentos, mas pode ser desconfiado enquanto nao se sentir seguro com a pessoa.');
}
if (dia >= 22 && mes == 11 || dia <= 21 && mes == 12) {

    console.log('O melhor signo do zoodiaco e o seu e Sagitario. Um signo de bem com a vida, que esta sempre em busca de acao e que vive rodeado de amigos. Este e o signo de sagitario, que e sonhador e adora conhecer pessoas e lugares novos.');
}

if (dia >= 22 && mes == 12 || dia <= 19 && mes == 1) {

    console.log('Seu signo e Capricornio. Trabalhador, timido e educado, o capricornio pode passar uma imagem de fechado e ate mesmo antipatico, mas e que ele eprecisa confiar em quem esta ao seu lado para se abrir totalmente. Com paciencia, ele se mostra um amigo leal e um companheiro fiel.');
}
