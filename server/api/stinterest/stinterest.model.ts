import * as mongoose from 'mongoose';

export interface IStinterest extends IStinterest, mongoose.Document { }

let StinterestSchema = new mongoose.Schema ({
  id: Any,
  description: String,
  image: String,
  owner: String,
  tag: { type: String, required: true},
  repinned: []
},
owner: { type: mongoose.Schema.Types.ObjectID, ref: 'User'}
});
export let Stinterest = mongoose.model('Stinterest', stinterestSchema)
