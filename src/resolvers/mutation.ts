import { User, UserStatus } from '../class/usuario/usuario'
import { usuarios, proximoId } from '../data/objs'

interface iNewUser {
    nome: string,
    email: string,
    idade: number
}

interface iRemoveUser {
    id: number
}

interface iUpdateUser extends iRemoveUser, iNewUser { }

export = {
    insertUser(_: ParentNode, { nome, email, idade }: iNewUser) {
        const checkEmail: boolean = usuarios.some(u => u.email === email)
        if (checkEmail) throw new Error('User already exists')

        const newUser: User = {
            id: proximoId(),
            nome,
            email,
            idade,
            perfil_id: 1,
            status: UserStatus.ATIVO
        }

        usuarios.push(newUser)
        return newUser
    },
    removeUser(_: ParentNode, { id }: iRemoveUser) {
        const idxUser2remove = usuarios.findIndex(u => u.id === id)
        if (idxUser2remove < 0) return null
        const user2remove = usuarios.splice(idxUser2remove, 1)
        return user2remove ? user2remove[0] : null
    },
    updateUser(_: ParentNode, args: iUpdateUser) {
        const idxUser2update = usuarios.findIndex(u => u.id === args.id)
        if (idxUser2update < 0) return null
        const user2update = {
            ...usuarios[idxUser2update],
            ...args
        }
        usuarios.splice(idxUser2update, 1, user2update)
        return user2update
    }
}