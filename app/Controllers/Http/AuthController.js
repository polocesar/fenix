'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Token = use('App/Models/Token');

class AuthController {

    /**
     * Login.
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
    */
    async login ({ request, response, auth }) {
        try {
            const { email, password } = request.all();
            return await auth.withRefreshToken().attempt(email, password);
        } catch (e) {
            return response.status(401).json({
                message: 'Login ou senha inválido.',
            });
        }
    }
}

module.exports = AuthController
