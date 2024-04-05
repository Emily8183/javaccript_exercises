//here's the logic of callback function

function callbackFunction(typeOfEvent, callback) {
  var eventThatHappened = {
    eventType: "keypress",
    key: "p",
  };

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

callbackFunction("keypress", function (event) {
  console.log(event);
});
