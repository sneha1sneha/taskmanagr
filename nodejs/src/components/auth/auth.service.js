const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger = require('../../support/logger');
const AuthService = {

  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */
  // calling login function
  doLogin: async (requestBody) => {

    try {
      //email and password from the object is stored to variable and binded to query
      const { username, password } = requestBody;
      let queryObj1 = `SELECT user.first_name, user.username,user.user_id, user.password, role_list.user_role_id
    FROM user
    LEFT JOIN role_list 
    ON user.user_id = role_list.user_id
    WHERE user.username = '${username}';`
      // let queryObj = `select * from user_account where email = '${email}'`;
      //query is passesd for execution and result is stored in  resultObj
      const resultObj = await db.promise(queryObj1);

      //checking the hashed registered password and user entered password
      const passwordMatch = await bcrypt.compare(password, resultObj[0].password);
      console.log("resultObj", resultObj[0], passwordMatch)
      if (resultObj.length == 0 || passwordMatch == false) {
        throw new BadRequestError('Username or Password is invalid!');
      }

      payload = {
        userId: resultObj[0].user_id,
        userRole: resultObj[0].user_role_id,
        userName: resultObj[0].username,
      };
      // token is created with payload containing userId,roleId
      const accessToken = await JwtService.generateJWT({
        payload
      });
      return {
        accessToken,
        ...payload
      };
    } catch (error) {
      logger.error("dologin()" + error);
    }


  },





  doRegister: async (requestBody) => {
    try {
      const { username, password, first_name, last_name, email } = requestBody;
      var sqlQuery = `SELECT username from user where username = '${username}'`;
      const usernameResult = await db.promise(sqlQuery);
      if (!usernameResult.length == 0) {
        return new BadRequestError('username is already in use');
      }
      var sqlObj = `INSERT INTO user VALUES (?,?,?,?,?,?)`;
      // making db call for inset user in to user_account table with role table inserion 
      const resultObj = await db.promise(sqlObj, [, username, bcrypt.hashSync(password), first_name, last_name, email])
        .then((result) => {
          console.log("result", result)
          // get inserted user id from previous query
          let queryObj = `select user_id from user where user_id = '${result.insertId}'`;
          return db.promise(queryObj);
        }).then((result) => {
          // insert useride into rolelist table with user role as static
          let roleid = 1; // user role type value = 1 and dadmin type = 2
          let queryObj = `INSERT INTO role_list VALUES (?,?,?)`;
          return db.promise(queryObj, [, roleid, result[0].user_id]);
        })
        .catch((err) => {
          // write error into logger file
          console.log("catch error ", err);
        });

      if (resultObj.length == 0) {
        //
        logger.error("doRegister() Insert failed");
        //
        throw new BadRequestError('Insert failed');
      }
      return {
        status: 200,
        result: resultObj[0]
      };
    } catch (error) {
      logger.error("doRegister()" + error);
    }
  },






};

module.exports = AuthService;
