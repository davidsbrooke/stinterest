import * as express from 'express';
import {User, IUserModel} from '../../users/user.model'

let passport = require('passport');
var PinterestStrategy = require('passport-pinterest-oauth').OAuth2Strategy;
// as an alternative to line 5 try writing .Strategy instead of OAuth strategy
passport.use(new PinterestStrategy({
    clientID: process.env.PINTEREST_CLIENT_ID,
    clientSecret: process.env.PINTEREST_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/v1/auth/pinterest/callback",
		passReqToCallback: true
  }, auth
));
export function auth(req, accessToken, refreshToken, profile, cb) {
	User.findOne({ pinterestId: profile.id }).exec((err, user) => {
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
