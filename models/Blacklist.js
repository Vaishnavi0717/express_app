const BlacklistSchema = new mongoose.Schema({
    token: String
});
module.exports = mongoose.model("Blacklist", BlacklistSchema);