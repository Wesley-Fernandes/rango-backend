import { AdminRepository } from "./admin-repository";
import { UserRepository } from "./user-repository";

class Repository{
    public user: UserRepository;
    public admin: AdminRepository;

    constructor(){
        this.user = new UserRepository();
        this.admin = new AdminRepository()
    }
}

const REPOSITORY = new Repository();
export default REPOSITORY;