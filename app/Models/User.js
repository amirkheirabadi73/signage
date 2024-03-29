'use strict'

const Model = use('Model')

class User extends Model {
  static get table() {
    return 'users'
  }

  static get primaryKey() {
    return 'id'
  }

  // Relations
  companies() {
    return this.belongsToMany('App/Models/Company').pivotTable(
      'companies_users'
    )
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
