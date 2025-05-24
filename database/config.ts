import mongoose from 'mongoose';


export const conectarDB = async (): Promise<void> => { 
    try {
        const dbUrl = process.env.DB_URL
        await mongoose.connect(`${dbUrl}`)
        console.log("Base de datos online");
    } catch (error) {
        console.log("Error de conexión", error);
    }
};

export default conectarDB
