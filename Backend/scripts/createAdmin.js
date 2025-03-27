const bcrypt = require("bcrypt");

async function hashPassword() {
  const password = "abcdahal";
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log("Hashed password:", hash);
}

hashPassword();
