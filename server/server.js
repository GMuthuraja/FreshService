var service = require("./lib/handle-response");
var fetch = require("node-fetch");
var transporter = service.login();
var client = service.plivoclient();

exports = {
  events: [
    { event: "onTicketUpdate", callback: "onTicketUpdateCallback" }
  ],

  onTicketUpdateCallback: function (payload) {
    console.log("Logging arguments from onTicketUpdate event: " + JSON.stringify(payload));

    // var mailOptions = {
    //   from: 'jessykarthick1@gmail.com',
    //   to: 'muthuraja0043@gmail.com',
    //   subject: 'Sending Email using Node.js',
    //   text: JSON.stringify(payload)
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });

    // client.messages.create('+919025720760', '+917358254162', 'Success: ' + JSON.stringify(payload.data.ticket.status_name)).then(function (res) {
    //   console.log(res);
    // });

    if (payload) {
      if (payload.data) {
        if (payload.data.ticket) {
          if (payload.data.ticket.changes) {

            var update_status = payload.data.ticket.changes.status;
            if (update_status) {
              if (update_status.length > 1) {
                if (update_status[0] != update_status[1]) {
                  console.log(update_status[0]);
                  console.log(update_status[1]);
                  fetch('http://115.110.226.234/raqmockapi/api/estaff/sendLog', { method: 'post', body: JSON.stringify(payload), headers: { 'Content-Type': 'application/json' } }).then(r => {
                    console.log(r);
                  }).catch(error => {
                    console.log(error);
                  });
                }
              }
            }

          }
        }
      }
    }

  }
}
