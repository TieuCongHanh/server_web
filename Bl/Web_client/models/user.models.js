var db = require('./db');
const userSchema = new db.mongoose.Schema(
    {
        user: { type: String, require: true },
        password: { type: String, require: true },
        email: { type: String, require: true },
        vaitro: { type: String, require: true },
        img: { type: String, require: false },
    },
    {
        collection: 'user'
    }
)
let userModel = db.mongoose.model('userModel', userSchema);

module.exports = { userModel };