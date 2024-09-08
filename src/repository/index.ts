import { UserRepository } from "./user-repository";

class Repository{
    public user: UserRepository;

    constructor(){
        this.user = new UserRepository();
    }
}

const REPOSITORY = new Repository();
export default REPOSITORY;