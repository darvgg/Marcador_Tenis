function mostrar_resultado (score_1,score_2){
    let resultado="-";
    if (score_1==0 && score_2==0){
        resultado = "Love - Love";
    }
    else if (score_1==15 && score_2 == 0){
        resultado = "15 - 0";
    }
    else if (score_1==30 && score_2 == 0){
        resultado = "30 - 0";
    }
    return resultado;
}

export {mostrar_resultado};