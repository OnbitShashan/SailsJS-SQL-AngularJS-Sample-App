/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

module.exports = {
    login : async function(req, res) {
            var user = await User.findOne({
                username: req.body.username
            })
            if (!user) return res.notFound()
    
            await bcrypt.compare(req.body.password, user.password);
            // if no errors were thrown, then grant them a new token
            // set these config vars in config/local.js, or preferably in config/env/production.js as an environment variable
            var token = jwt.sign({user: user.id}, sails.config.custom.jwtSecret, {expiresIn: sails.config.custom.jwtExpires})
            // set a cookie on the client side that they can't modify unless they sign out (just for web apps)
            res.cookie('sailsjwt', token, {
                signed: true,
                // domain: '.yourdomain.com', // always use this in production to whitelist your domain
                maxAge: sails.config.custom.jwtExpires
            })
            // provide the token to the client in case they want to store it locally to use in the header (eg mobile/desktop apps)
            return res.ok(token)
    },

    	// patch /api/users/logout
	logout: function(req, res) {
		res.clearCookie('sailsjwt')
		req.user = null
		return res.ok()
	},

};

