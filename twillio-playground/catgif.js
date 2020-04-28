exports.handler = function(context, event, callback) {
  var client = context.getTwilioClient();
  
  console.log("Sending intital response")
  client.messages.create({ 
      to: event.From,
      from: event.To,
      body: "Fetching a cat for you... purrrrr"
  }, function(err, res) { 
          console.log("Sending a cat.")
        let twiml = new Twilio.twiml.MessagingResponse();
        let message = twiml.message();
        message.body("Here is your cat!");
        message.media("http://thecatapi.com/api/images/get?format=src&type=gif")
callback(null, twiml);
  })
};

