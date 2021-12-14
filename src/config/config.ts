export default {
    jwtSecret: process.env.JWT_S || 'secret',
    DATABASE:{
        URI: 'mongodb://localhost/mural',
        USER: '',
        PASSWD: ''
    }
}