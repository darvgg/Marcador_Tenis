function mostrar_resultado (score_1,score_2){
    let resultado="-";
    if (score_1==0 && score_2==0)
            resultado = "Love - Love";
    return resultado;
}

export {mostrar_resultado};