import { perfis } from '../data/objs'
import { User } from "../class/usuario/usuario"
import Perfil from "../class/perfil/perfil"

export = {
    salario(usuario): User {
        return usuario.salario_real
    },
    perfil(usuario: User): Perfil {
        const selected = perfis.filter(p => p.id === usuario.perfil_id)
        return selected ? selected[0] : null
    }
}