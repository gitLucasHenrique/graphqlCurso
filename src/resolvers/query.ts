import { perfis, usuarios } from '../data/objs'
import { Usuario, iUsuarioComSalario, UsuarioStatus } from "../class/usuario/usuario"
import Perfil from "../class/perfil/perfil"

export =  {
    ola(): string {
        return 'boa'
    },
    teste(): string {
        return 'boa teste'
    },
    horaCerta(): string {
        return hora(new Date)
    },
    horaDate(): Date {
        return new Date
    },
    usuarioLogado(): iUsuarioComSalario {
        return {
            id: 1,
            nome: 'Lucas',
            idade: 30,
            email: 'l@gmail.com',
            salario_real: 1234.12,
            vip: true,
            perfil_id: 1,
            status: UsuarioStatus.ATIVO
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
        const crescente: (a: number, b: number) => number = (a: number, b: number) => a - b
        let finalArr: number[] = []
        while (finalArr.length < 6) {
            let value: number = parseInt((Math.random() * 60 + 1).toString())
            if (!finalArr.includes(value))
                finalArr.push(value)
        }
        return finalArr.sort(crescente)
    },
    usuarios(): Usuario[] {
        return usuarios
    },
    usuario(_: ParentNode, args: Usuario): Usuario {
        const selected = usuarios.filter(u => u.id === args.id * 1)
        return selected ? selected[0] : null
    },
    usuarioDes(_: ParentNode, { id }): Usuario {
        const selected = usuarios.filter(u => u.id === id * 1)
        return selected ? selected[0] : null
    },
    perfis(): Perfil[] {
        return perfis
    },
    perfil(_: ParentNode, args: Perfil): Perfil {
        const selectedPerfil = perfis.filter(p => p.id === args.id * 1)
        return selectedPerfil ? selectedPerfil[0] : null
    }
}

function hora(time: Date): string {
    return `${time.getHours().toString()}:${time.getMinutes().toString()}`
}