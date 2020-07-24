let nodemailer = require('nodemailer');
let plivo = require('plivo');

function handleResponse(err, resp) {
  if (!err && resp.statusCode === 200) {
    console.log(JSON.stringify({
      status: resp.statusCode,
      message: 'success'
    }));
  }
}

function plivoclient(){
  return new plivo.Client('MAMTM0ODFIOTRJNMJMOG', 'ZjMxMzExNmY2ZjJmYjU0M2ZlMzdmNDQ0NTQ5OWFj');
}

function login() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jessykarthick1@gmail.com',
      pass: 'LongDrive72'
    }
  });
}

exports = {
  handleResponse: handleResponse,
  login: login,
  plivoclient: plivoclient
};