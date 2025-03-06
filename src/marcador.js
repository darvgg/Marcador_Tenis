
const puntuaciones = ["0", "15", "30", "40"];
function mostrar_resultado (score_1,score_2){
    let resultado="-";
    if (score_1==0 && score_2==0){
        resultado = "Love - Love";
    }
    else if (score_1 < 4 && score_2 < 4){
        resultado = puntuaciones[score_1] + " - " +puntuaciones [score_2];
    }
    else if (score_1 == score_2){
        resultado = "Deuce - Deuce";
    }
    else if (score_1 > score_2){
        resultado = "Advantage for p1";
    }
    else if (score_1 < score_2){
        resultado = "Advantage for p2";
    }
    return resultado;
}

export {mostrar_resultado};