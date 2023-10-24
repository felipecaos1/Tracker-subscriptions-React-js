
export const moneyFormat = amount => {
    return amount.toLocaleString('es-CO',{
        style:'currency',
        currency:'COP'
    })
}