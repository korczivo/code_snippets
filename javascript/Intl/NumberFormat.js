const { format: formatPLN } = new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN' })
const { format: formatUSD } = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
const { format: formatEUR } = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' })
const { format: formatBRL } = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

formatPLN(10) // PLN 10.00
formatUSD(10) // $10.00
formatEUR(10) // €10.00
formatBRL(10) // R$10.00
