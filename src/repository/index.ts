import { AdminRepository } from "./admin-repository";
import { UserRepository } from "./user-repository";
import { WorkRepository } from "./work-repository";

class Repository{
    public user: UserRepository;
    public admin: AdminRepository;
    public work: WorkRepository;

    constructor(){
        this.user = new UserRepository();
        this.admin = new AdminRepository()
        this.work = new WorkRepository()
    }
}

const REPOSITORY = new Repository();
export default REPOSITORY;