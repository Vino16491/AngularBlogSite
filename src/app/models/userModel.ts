export class userModel {
    constructor(
        public email: string,
        public password: string
    ) { }
}

export class userSignUpModel {
    constructor(
        public email: string,
        public password: string,
        public username: string,
        public mobilenumber: Number
    ) { }
}