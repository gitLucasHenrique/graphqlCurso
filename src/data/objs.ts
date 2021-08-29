import { Usuario, UsuarioStatus } from "../class/usuario/usuario"
import Perfil from "../class/perfil/perfil"

const usuarios: Usuario[] = [
    {
        id: 1,
        nome: 'lucas',
        email: 'l@gmail.com',
        idade: 30,
        perfil_id: 1,
        status: UsuarioStatus.ATIVO
    },
    {
        id: 2,
        nome: 'lucass',
        email: 'sls@gmail.com',
        idade: 33,
        perfil_id: 2,
        status: UsuarioStatus.BLOQUEADO
    },
    {
        id: 3,
        nome: 'lucasss',
        email: 'lss@gmail.com',
        idade: 34,
        perfil_id: 2,
        status: UsuarioStatus.INATIVO
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

export { perfis, usuarios }