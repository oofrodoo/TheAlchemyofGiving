const bcrypt = require("bcrypt");
const pool = require("../config/db");

async function createAdmin() {
  try {
    const email = "abcdahal@admin.com";
    const password = "abcdahal";
    const name = "Admin User";

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if admin exists
    const exists = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (exists.rows.length > 0) {
      console.log("✅ Admin user already exists");
      process.exit(0);
    }

    // Create admin user
    await pool.query(
      "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)",
      [name, email, hashedPassword, "admin"]
    );

    console.log("✅ Admin user created successfully");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
}

createAdmin();