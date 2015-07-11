$('document').ready(function () {
   var up = $('#up').asEventStream('click').log();
   var down = $('#down').asEventStream('click').log();

   var counter = up.map(1).merge(down.map(-1)).scan(0, function (x, y) {
      return x + y;
   });

   counter.assign($('#counter'), 'text');

   function textFieldValue(textField) {
      function value() {
         return textField.val()
      }
      return textField.asEventStream("keyup").map(value).toProperty(value());
   }

   username = textFieldValue($("#username input"));
   fullname = textFieldValue($("#fullname input"));
   username.log("A");
   fullname.log("B");

   function nonEmpty(x) {
      return x.length > 0;
   }

   usernameEntered = username.map(nonEmpty);
   fullnameEntered = fullname.map(nonEmpty);
   buttonEnabled = usernameEntered.and(fullnameEntered);

   buttonEnabled.onValue(function (enabled) {
      $("#register button").attr("disabled", !enabled);
   });
});
