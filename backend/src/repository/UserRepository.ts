import { UserInterface } from "../interfaces";
import User from "../models/User"


export default class UserRepository {
    async create(user: UserInterface) {
        const createdUser = await User.create({...user})
        
        return createdUser;
    }

    async findByEmail(email: string) {
        const result = await User.findOne({ email });

        return result;
    }

    async findById(id: string) {
        const result = await User.findById(id);

        return result;
    }

    async updateOne(userId: string, query: object) {
        const result = await User.findByIdAndUpdate(userId, { $set: query });
        
        return result;
    }
}