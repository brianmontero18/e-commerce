const currencies = [
    {
        id: "ARS",
        symbol: "$",
        description: "Peso argentino"
    }
];

export const getCurrencySymbol = (id) => currencies.find(item => item.id === id).symbol;
export const getNumberFormated = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");