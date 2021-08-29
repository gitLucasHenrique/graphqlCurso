import { perfis } from '../data/objs'
import { Usuario } from "../class/usuario/usuario"
import Perfil from "../class/perfil/perfil"

export = {
    salario(usuario): Usuario {
        return usuario.salario_real
    },
    perfil(usuario: Usuario): Perfil {
        const selected = perfis.filter(p => p.id === usuario.perfil_id)
        return selected ? selected[0] : null
    }
}