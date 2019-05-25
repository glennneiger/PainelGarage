import React, { Component } from 'react'
import pagarme from 'pagarme/browser'

export default class Pagamento extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            card_number: "4040240007381979",
            card_holder_name: "Lucas W M Tinta",
            card_month: "06",
            card_year: "23",
            card_cvv: "011"
        }
    }

    onchange = (e) => {
        this.setState({ ...this.state, [e.target.id]: e.target.value })
    }
    

    async componentDidMount() {
        const client = await pagarme.client.connect({ api_key: API_KEY })
        console.log(client)
        const tras = await client.transactions.create({
            "amount": 21000,
            "card_number": "4111111111111111",
            "card_cvv": "123",
            "card_expiration_date": "0922",
            "card_holder_name": "Morpheus Fishburne",
            "customer": {
                "external_id": "#3311",
                "name": "Morpheus Fishburne",
                "type": "individual",
                "country": "br",
                "email": "mopheus@nabucodonozor.com",
                "documents": [
                    {
                        "type": "cpf",
                        "number": "30621143049"
                    }
                ],
                "phone_numbers": ["+5511999998888", "+5511888889999"],
                "birthday": "1965-01-01"
            },
            "billing": {
                "name": "Trinity Moss",
                "address": {
                    "country": "br",
                    "state": "sp",
                    "city": "Cotia",
                    "neighborhood": "Rio Cotia",
                    "street": "Rua Matrix",
                    "street_number": "9999",
                    "zipcode": "06714360"
                }
            },
            "shipping": {
                "name": "Neo Reeves",
                "fee": 1000,
                "delivery_date": "2000-12-21",
                "expedited": true,
                "address": {
                    "country": "br",
                    "state": "sp",
                    "city": "Cotia",
                    "neighborhood": "Rio Cotia",
                    "street": "Rua Matrix",
                    "street_number": "9999",
                    "zipcode": "06714360"
                }
            },
            "items": [
                {
                    "id": "r123",
                    "title": "Red pill",
                    "unit_price": 10000,
                    "quantity": 1,
                    "tangible": false
                }
            ]
        })
        //console.log(tras)
    }

    submit = async (event) => {
        event.preventDefault();
        var card = {} 
        card.card_holder_name = this.state.card_holder_name
        card.card_expiration_date = this.state.card_month  + this.state.card_year
        card.card_number = this.state.card_number
        card.card_cvv = this.state.card_cvv

        var cardValidations = pagarme.validate({card: card})
        console.log(cardValidations)

        const client = await pagarme.client.connect({ encryption_key: API_KEY_ENCRYP })
        const card_hash = await client.security.encrypt(card)
        const cliente = await pagarme.client.connect({ api_key: API_KEY })
        const tras = await cliente.transactions.create({
            "amount": 21000,
            "card_hash": card_hash,
            "customer": {
                "external_id": "#3311",
                "name": "Morpheus Fishburne",
                "type": "individual",
                "country": "br",
                "email": "mopheus@nabucodonozor.com",
                "documents": [
                    {
                        "type": "cpf",
                        "number": "30621143049"
                    }
                ],
                "phone_numbers": ["+5511999998888", "+5511888889999"],
                "birthday": "1965-01-01"
            },
            "billing": {
                "name": "Trinity Moss",
                "address": {
                    "country": "br",
                    "state": "sp",
                    "city": "Cotia",
                    "neighborhood": "Rio Cotia",
                    "street": "Rua Matrix",
                    "street_number": "9999",
                    "zipcode": "06714360"
                }
            },
            "shipping": {
                "name": "Neo Reeves",
                "fee": 1000,
                "delivery_date": "2000-12-21",
                "expedited": true,
                "address": {
                    "country": "br",
                    "state": "sp",
                    "city": "Cotia",
                    "neighborhood": "Rio Cotia",
                    "street": "Rua Matrix",
                    "street_number": "9999",
                    "zipcode": "06714360"
                }
            },
            "items": [
                {
                    "id": "r123",
                    "title": "Red pill",
                    "unit_price": 10000,
                    "quantity": 1,
                    "tangible": false
                }
            ]
        })
        console.log(tras)
    }

    render() {
        const { card_number, card_holder_name, card_month, card_year, card_cvv} = this.state
        return (
            <>
                <form id="payment_form" onSubmit={this.submit} method="POST">
                    <div id="form">
                        Número do cartão: <input type="text" id="card_number" onChange={this.onchange} value={card_number} />
                        <br />
                        Nome (como escrito no cartão): <input type="text" id="card_holder_name" onChange={this.onchange} value={card_holder_name}  />
                        <br />
                        Mês de expiração: <input type="text" id="card_month" onChange={this.onchange} value={card_month} />
                        <br />
                        Ano de expiração: <input type="text" id="card_year" onChange={this.onchange} value={card_year} />
                        <br />
                        Código de segurança: <input type="text" id="card_cvv" onChange={this.onchange} value={card_cvv} />
                        <br />
                        <div id="field_errors">
                        </div>
                        <br />
                    </div>
                    <input type="submit"></input>
                </form>
            </>
        )
    }
}

const API_KEY = "ak_test_qKalDFWVJvt3sG3xEbuiIoi6FhVcmL";
const API_KEY_ENCRYP = "ek_test_BBJu0RMpQ9jxiT5yWkap4Nhy0T1Rps";
const LinkApi = "https://api.pagar.me/1";
