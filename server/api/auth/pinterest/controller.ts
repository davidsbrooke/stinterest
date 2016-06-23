import * as express from 'express';
import {User, IUserModel} from '../../users/user.model'

let passport = require('passport');
var PinterestStrategy = require('passport-pinterest-oauth').OAuth2Strategy;

passport.use(new PinterestStrategy({
    clientID: PINTEREST_CLIENT_ID,
    clientSecret: PINTEREST_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/pinterest/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.
		findOne({ pinterestId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

export function auth(req, accessToken, refreshToken, profile, cb) {
	User.findOne({ googleId: profile.id }).exec((err, user) => {
		if(err) return cb(err);
		if(user) {
			req['tempUser'] = user;
			return cb(null, user);
		} else {
			let u = new User();
			u.email = profile.email;
			u.pinterestId = profile.id;
			u.pinterestToken = accessToken;
			u.save((err, result) => {
				if (err) return cb(err);
				req['tempUser'] = result;
				cb(null, result);
			});
		}
	});
}

export function callback(req: express.Request, res: express.Response, next: Function) {
	res.redirect('/?code=' + req['tempUser'].createJWT());
}
