const querystring = require('node:querystring');

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var token;
/**
 * Logea a Spotify con una cuenta Spotify
 * @param {object} req Objeto con los datos entrantes
 * @param {object} res Objeto con los datos salientes
 * @returns 
 */
const login = async (req, res) => {
  console.log("Entre espotify")
  // state: Optional, but strongly recommended -> 
  // This provides protection against attacks such as cross-site request forgery. See RFC-6749.
  var state = makeid(16);
  console.log(state);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.CLIENT_API_ID,
      scope: scope,
      redirect_uri: process.env.REDIRECT_API_URI,
      state: state
    }));
}

const callback = async (req, res) => {
  var code = req.query.code || null;
  console.log("code: ", code);
  var state = req.query.state || null;
  console.log("state: ", state);

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    var authOptions = {
      //url: 'https://accounts.spotify.com/api/token',
      method: "POST",
      form: {
        code: code,
        redirect_uri: process.env.REDIRECT_API_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_API_ID + ':' + process.env.CLIENT_API_SECRET).toString('base64'))
      },
      body: 'grant_type=client_credentials',
      json: true
    };

    const url = 'https://accounts.spotify.com/api/token';
    const response = await fetch(url, authOptions);
    if (response.ok) {
      const jsonResponse = await response.json();
      token = jsonResponse.access_token;
      console.log(jsonResponse.access_token);
      res.redirect('/');
    } else {
      console.log(response.statusText);
    }
  }
}

const spotifyToken = async (req, res) => {
  res.json(
    {
      access_token: token
    })
}

module.exports = {
  login,
  callback,
  spotifyToken
}