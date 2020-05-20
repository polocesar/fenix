'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {typeof import('@adonisjs/validator/src/Validator')} */
const { validateAll } = use('Validator');

/**
 * Resourceful controller for interacting with usuarios
 */
class UserController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await User.query().orderBy('id').fetch();
  }

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.all();
    
    const rules = {
      nome: 'required|string',
      email: 'required|email|unique:users,email',
      grupo: 'required|string',
      password: 'required|confirmed|string',
    };

    const validation = await validateAll(data, rules);

    if (validation.fails()) {
      return response.status(500).json({
        message: 'Erro no formulário',
        errors: validation.messages()
      });
    }

    User.create(request.except(['password_confirmation']));

    return response.json({
      message: 'Usuário criado com sucesso'
    });
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      return await User.findOrFail(params.id);
    } catch (e) {
      return response.status(500).json({
        message: 'Não foi possível encontrar o usuário'
      });
    }
  }

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const user = await User.find(params.id);

      const data = request.all();
    
      const rules = {
        nome: 'required|string',
        email: 'required|email',
        grupo: 'required|string',
        password: 'confirmed|string',
      };

      const validation = await validateAll(data, rules);

      if (validation.fails()) {
        return response.status(500).json({
          message: 'Erro no formulário',
          errors: validation.messages()
        });
      }

      user.merge(request.except(['password_confirmation']));

      await user.save();

      return response.json({
        message: 'Usuário atualizado com sucesso'
      });
    } catch(e) {
      return response.status(500).json({
        message: 'Não foi possível atualizar o usuário',
      });
    }
    
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const user = await User.find(params.id);
      await user.delete();
      return response.json({
        message: 'Usuário removido com sucesso'
      });
    } catch (e) {
      return response.status(500).json({
        message: e.message
      });
    }
  }
}

module.exports = UserController
