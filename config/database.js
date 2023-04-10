module.exports = {
  secret: "nodeauthsecret",
  database:
  mongoose.connect('mongodb://127.0.0.1:27017/Databases')
  .then(() => console.log('Connected!')),
  // "mongodb+srv://thuyntph22624:TrungThuy299@cluster0.pyyf6sj.mongodb.net/Databases?retryWrites=true&w=majority",
    // "mongodb+srv://duylh17:LYUw6K2jgVwoXBuC@cluster0.0n8qgpd.mongodb.net/cp17301?retryWrites=true&w=majority",
};