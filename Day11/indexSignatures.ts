// Interface with Index Signature
interface UserMetadata {
    createdAt: Date;

    [key: string]: string | number | boolean | Date;
}

// Example Object
const user: UserMetadata = {
    createdAt: new Date(),

    username: "Kundan",
    age: 22,
    isAdmin: true,
    country: "India"
};

console.log(user);