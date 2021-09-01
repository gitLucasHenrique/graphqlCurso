import { User, UserStatus } from '../class/usuario/usuario'
import { usuarios, proximoId } from '../data/objs'

function indexUser(filter){
    if(!filter) return -1
    const { id, email } = filter
    if(id) return usuarios.findIndex(u => u.id === id)
    else if (email) return usuarios.findIndex(u => u.email === email)
    return -1
}

interface iRemoveUser {
    id: number
}

interface iUpdateUser extends iRemoveUser { }

export = {
    insertUser(_: ParentNode, { userData }) {
        const checkEmail: boolean = usuarios.some(u => u.email === userData.email)
        if (checkEmail) throw new Error('User already exists')

        const newUser: User = {
            id: proximoId(),
            nome: userData.nome,
            email: userData.email,
            idade: userData.idade,
            perfil_id: 1,
            status: UserStatus.ATIVO
        }

        usuarios.push(newUser)
        return newUser
    },
    removeUser(_: ParentNode, { filter }) {
        const idxUser2remove = indexUser(filter)
        if (idxUser2remove < 0) return null
        const user2remove = usuarios.splice(idxUser2remove, 1)
        return user2remove ? user2remove[0] : null
    },
    updateUser(_: ParentNode, { filter, userData }) {
        const idxUser2update = indexUser(filter)
        if (idxUser2update < 0) return null
        const user2update = {
            ...usuarios[idxUser2update],
            ...userData
        }
        usuarios.splice(idxUser2update, 1, user2update)
        return usuarios[idxUser2update]
    }
}