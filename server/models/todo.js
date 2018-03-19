// var mongoose=require('mongoose');

// var Todo=mongoose.model('Todo',{
//     name:{
//         type:String,
//         required:true,
//         tirm:true,
//         minlength:1
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     completedAt:{
//         type:Number,
//         default:null
//     }
// });

// module.exports={Todo}
const mongoose=require('mongoose');
var todoSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }

})

var Todo=mongoose.model('Todo',todoSchema)

module.exports={Todo}