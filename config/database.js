//deploying to heroku conde is required on heroku for deploying
// it checks to see if the app is in production on heroku or it running local

if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb://admin:res6nvhg@ds061385.mlab.com:61385/ideas"
  };
} else {
  module.exports = { mongoURI: "mongodb://localhost:27017/idea-dev" };
}
