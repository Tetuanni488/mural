import { Schema,model } from 'mongoose';

const noteSchema = new Schema({
    title:{
        type: String,
        trim: true,
    },
    text:{
        type: String,
        trim:true
    }
},{
    versionKey:false,
    timestamps:true,
});

export default model('note',noteSchema);