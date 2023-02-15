const AuthService = require('./auth.service');

const AuthController = {
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  // Function to handle Login
  login: async (httpRequest) => {
    console.log('log')
    // Call the doLogin function from AuthService to handle the login
    const loginData = await AuthService.doLogin(httpRequest.body);
    // Return the token data with a status code of 200
    return {
      statusCode: 200,
      body: {
        data: loginData
      }
    };
  }
  ,

  // Function to handle registeration
  register: async (httpRequest) => {
    console.log('AA')
    // Call the doRegister function from AuthService to handle the registration
    const registerdata = await AuthService.doRegister(httpRequest.body);
    // Return the insertion values with a status code of 200
    return {
      statusCode: 200,
      body: {
        data: registerdata
      }
    };
  }

};

module.exports = AuthController;
