import { UserRepository } from "../../domain/user-repository";
import { User } from "../../domain/user";
import {USER_COLLECTION} from "./user-collection";

export class ElasticUserRepository implements UserRepository{
    async getById(id: string): Promise<User | null> {
        console.log("Using elastic")
        const user = USER_COLLECTION.find(user => user.id === id);
        return user ? new User(user.id, user.name) : null;
    }

}