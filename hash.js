const bcrypt = require('bcryptjs');
const fs = require('fs');

// db.json ni o‘qib olish
const db = JSON.parse(fs.readFileSync('db.json'));

// Har bir foydalanuvchining passwordini hash qilish
db.users = db.users.map((user) => {
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
  return user;
});

// db.json ni yangilash
fs.writeFileSync('db.json', JSON.stringify(db, null, 2));

console.log('✅ Barcha passwordlar hash qilindi!');
