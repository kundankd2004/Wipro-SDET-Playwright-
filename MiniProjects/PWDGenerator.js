let chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#";

let password = "";

for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
}

console.log("Generated Password:", password);