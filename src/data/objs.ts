import { User, UserStatus } from "../class/usuario/usuario"
import Perfil from "../class/perfil/perfil"

let id = 1;

function proximoId() {
    return id++
}

const usuarios: User[] = [
    {
        id: proximoId(),
        nome: 'lucas',
        email: 'l@gmail.com',
        idade: 30,
        perfil_id: 1,
        status: UserStatus.ATIVO
    },
    {
        id: proximoId(),
        nome: 'lucass',
        email: 'sls@gmail.com',
        idade: 33,
        perfil_id: 2,
        status: UserStatus.BLOQUEADO
    },
    {
        id: proximoId(),
        nome: 'lucasss',
        email: 'lss@gmail.com',
        idade: 34,
        perfil_id: 2,
        status: UserStatus.INATIVO
    },
]

const perfis: Perfil[] = [
    {
        id: 1,
        nome: 'comum'
    },
    {
        id: 2,
        nome: 'ADM'
    },
]

export { perfis, usuarios, proximoId }