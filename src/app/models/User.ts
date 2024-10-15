export class User {

    id!: string;
    name!: string;
    email!: string;
    password!: string;
    cpf!: string;
    birthday!: Date;
    role!: string;

    constructor(name?: string) { 
        if(name) {
            this.name = name;
        }
    }    

}