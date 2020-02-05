export const loginRequest = (payload)=>{
    return {
        type: 'LOGIN_REQUEST',
        ...payload
    };
}