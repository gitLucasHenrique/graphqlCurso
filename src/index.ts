import logger from './logger/index'
import { ApolloServer, gql } from 'apollo-server'
import { visitInParallel } from 'graphql'

const log = new logger

log.say(__filename,'everything is fine')


const typeDefs = gql`
    scalar Date
    #entrada da API
    type Usuario{
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto{
        nome: String!
        preco: Float!
        desconto: Int
        precoComDesconto: Float
    }
    
    type Query{
        ola: String!
        horaCerta: String!
        horaDate: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
    }
`

const resolvers = {
    Usuario: {
        salario(usuario): Object{
            return usuario.salario_real
        }
    },
    Produto: {
        precoComDesconto(produto): Object{
            if (!produto.desconto)
                return produto.preco
            else 
                return Math.round((produto.preco - (produto.preco * (produto.desconto / 100))) * 100) / 100
        }
    },
    Query: {
        ola() : string {
            return 'boa'
        },
        horaCerta() : string{
            return hora(new Date)
        },
        horaDate(): Date {
            return new Date
        },
        usuarioLogado(): Object {
            return {
                id: 1,
                nome: 'Lucas',
                idade: 30,
                email: 'l@gmail.com',
                salario_real: 1234.12,
                vip: true
            }
        },
        produtoEmDestaque(): Object {
            return {
                nome: 'coca',
                preco: 5.5,
                desconto: 3 //desconto em %
            }
        },
        numerosMegaSena(): number[] {
            const crescente: (a: number,b: number) => number = (a: number,b: number) => a - b
            let finalArr: number[] = []
            while(finalArr.length < 6){
            let value: number = parseInt((Math.random()*60 +1).toString())
            if(!finalArr.includes(value))
                finalArr.push(value)
            }
            return finalArr.sort(crescente)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

function hora(time:Date):string {
    const hour = time.getHours()
    return `${time.getHours().toString()}:${time.getMinutes().toString()}`
}

server.listen().then(({ url }) => {
    log.say(__filename, `server started at defaul port`)
})