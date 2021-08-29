class Usuario {
    id: number
    nome: string
    email: string
    idade: number
    salario?: number | null
    vip?: boolean | null
    perfil_id: number
    status: UsuarioStatus
}
//
enum UsuarioStatus {
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    BLOQUEADO = 'BLOQUEADO'
}

interface iUsuarioComSalario extends Usuario {
    salario_real: number
}

export { Usuario, iUsuarioComSalario, UsuarioStatus }