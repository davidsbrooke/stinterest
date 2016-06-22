import * as mongoose from 'mongoose';

export interface IPinModel extends IPin, mongoose.Document{}

let pinSchema = new mongoose.Schema({
  image: {type: String},
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  tag: {type: String},
  repinned: {type: []}
});

export let Pin = mongoose.model('Pin', pinSchema)
