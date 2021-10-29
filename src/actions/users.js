export const LOAD_USERS = 'LOAD_USERS';

export function getUsers (users) {
    return {
        type: LOAD_USERS,
        users
    }
}