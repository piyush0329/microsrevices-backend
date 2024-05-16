const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    orderId: String,
    customerId: String,
    amount: Number,
    status: String,
    txnId: String,
    items: [
        {
            product:{
                _id:{type:String,required:true},
                name:{type:String},
                desc:{type:String},
                type:{type:String},
                unit:{type:Number},
                banner:{type:String},
                price:{type:Number},
                supplier:{type:String}
            },
            unit:{type:Number,required:true}
        }
    ]
},
{
    toJSON: {
        transform(doc, ret){
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports =  mongoose.model('order', OrderSchema);