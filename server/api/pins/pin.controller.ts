import * as express from 'express';
import { Pin, IPinModel } from './pin.model';
import { User, IUserModel } from '../users/user.model';

export function getAll(req: express.Request, res: express.Response, next: Function) {

  }


export function getOne(req: express.Request, res: express.Response, next: Function) {
  Pin
    .findOne({ _id: req.params.id })
    .exec((err, result) => {
    if (err) return next(err);
    if (!result) return next({ status: 404, message: 'Could not find pin in the database.' });
    res.json(result);
  })
}

export function create(req: express.Request, res: express.Response, next: Function) {
  let p = new Pin(req.body);
  p.save((err, result) => {
    if (err) return next(err);
    res.json(result);
  });
}

export function update(req: express.Request, res: express.Response, next: Function) {
  Pin
  .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) return next(err);
    if (!result) return next({ status: 404, message: "Could not find the requested Pin." });
    res.json(result);
  });
}

export function remove(req: express.Request, res: express.Response, next: Function) {
  Pin
  .findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) return next(err);
    if (!result) return next({ status: 404, message: 'Could not find the requested pin.' });
    res.json({ success: true })
  });
}
