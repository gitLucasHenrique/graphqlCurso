class User {
    id: number
    nome: string
    email: string
    idade: number
    salario?: number | null
    vip?: boolean | null
    perfil_id: number
    status: UserStatus
}

enum UserStatus {
    ATIVO = 'ATIVO',
    INATIVO = 'INATIVO',
    BLOQUEADO = 'BLOQUEADO'
}

interface iUserComSalario extends User {
    salario_real: number
}

export { User, iUserComSalario, UserStatus }