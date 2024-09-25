// EJS is (embedded javascript).
// EJS allows you to embed JavaScript code directly in your HTML files

// Hashing is a process that takes an input (like a password or a message) and converts it into a fixed-size string of characters, This fixed-size string is called a "hash."
// Hashing is like putting something through a special machine that scrambles it into a jumbled, fixed-length code

const HashedPassword = await bcrypt.hash(password, Number(process.env.SALT));
console.log(HashedPassword);

// bcrypt.hash: This is a method provided by the bcrypt library that generates a hashed version of a password.
// The number of salt rounds determines how many times the hashing process is applied, making it more difficult for attackers to crack the hashed passwords using brute force.
