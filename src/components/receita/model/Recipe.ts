interface Recipe {
    nome: string,
    ingredientes: string[],
    modoPreparo: ModoPreparo,
    descricao: string,
    tempoPreparo: string,
    bigImg: any,
    smallimg: any
}

interface ModoPreparo {
    [passo: number]: string
}

export default Recipe;