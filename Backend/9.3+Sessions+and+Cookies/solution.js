import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy } from "passport-local";
import session from "express-session";
import env from "dotenv";

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(
  session({
    secret: "TOPSECRETWORD",
    //这个string可以是任意的，随便想一个
    resave: false,
    //means if you want to save the session in postgres
    saveUninitialized: true,
    //means if you want to store the uninitialized sessions into our server memory.
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      //maxAge sets when cookies will expire
      //1000 millisecond as a second
      // this is one day length cookie
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(passport.initialize());
app.use(passport.session());
//这两排必须在session设置的后面

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "",
  port: 5432,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

app.get("/secrets", (req, res) => {
  // console.log(req.user);
  //  req.isAuthenticated() is a function that this comes from Passport and it allows us to check, "Is the current user who's logged in in the current session authenticated already?"
  if (req.isAuthenticated()) {
    res.render("secrets.ejs");
  } else {
    res.redirect("/login");
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/secrets",
    failureRedirect: "/login",
  })
);

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      req.redirect("/login");
    } else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          const result = await db.query(
            //this part means we can get hold of the new user through this result of this database query.
            //The user gets inserted and then it comes back in the result becuz we're using the following returning function.在执行插入操作后，返回插入的行的特定列的值。
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            // RETURNING SQL command in order to return everything that we get back from the record that we just inserted.
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) => {
            //this part let the user log in automatically.
            console.log("success");
            res.redirect("/secrets");
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

passport.use(
  new Strategy(async function verify(username, password, cb) {
    // it's a local strategy means it's trying to validate whether if a user already has the right password, if their email exists in the database already,
    // "cb" means callback here
    try {
      const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
        username,
      ]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const storedHashedPassword = user.password;
        // It can automatically through the use of this verify() function, grab hold of the username and password from the form that submits the login request.
        bcrypt.compare(password, storedHashedPassword, (err, valid) => {
          if (err) {
            //Error with password check
            console.error("Error comparing passwords:", err);
            return cb(err);
            //this callback对应的是上面check req.isAuthenticated()的部分
          } else {
            if (valid) {
              //Passed password check
              return cb(null, user);
            } else {
              //Did not pass password check
              return cb(null, false);
            }
          }
        });
      } else {
        return cb("User not found");
      }
    } catch (err) {
      console.log(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
  //serializeUser is a function that save the data of the user who's logged in to local storage, we can use this callback to pass over any of the details of the user
  // // 将用户对象中的标识符（例如用户 ID）存储到会话中
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
  // deserializeUser 将会话中存储的用户标识符用于检索相应的用户对象，并将其传递给回调函数。
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
