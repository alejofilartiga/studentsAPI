import {Model, Schema, model} from "mongoose"

export interface IStudent {
    dni: number;
    name: string;
    email:string;
    camada:number;
    estado:boolean;
}

const StudentSchema = new Schema <IStudent> ({
    dni:{
        type:Number,
        required:true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    camada: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    }
})

const Student: Model <IStudent> = model <IStudent> ("string",StudentSchema)
export default Student