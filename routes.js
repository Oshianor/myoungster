const routes = require('next-routes');


module.exports = routes()
  .add("index", "/")
  .add("login", "/login")
  .add("signup", "/signup")
  .add("emailVerification", "/verify")
  .add("verificationLink", "/email-verification")
  .add("awaitingApproval", "/awaiting-approval")
  .add("reset", "/reset")
  .add("resetpassword", "/reset-password")
  .add("dashboard", "/dashboard/in")
  .add("user", "/dashboard/users")
  .add("account", "/dashboard/account")
  .add("event", "/dashboard/events")
  .add("media", "/dashboard/media")
  .add("forms", "/dashboard/forms")
  .add("sermons", "/dashboard/sermons")
  .add("devotion", "/dashboard/devotion")
  .add("hymn", "/dashboard/hymn")
  .add("prayRequest", "/dashboard/prayer-request")
  .add("live", "/dashboard/live")
  .add("support", "/dashboard/support")
  .add("payment", "/dashboard/payment")
  .add("app", "/dashboard/app");
