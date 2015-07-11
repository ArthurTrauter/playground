

exports.email = function (email) {
   var regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
   result = regex.exec(email);

   if (result) {
      return true;
   }

   return false;
}
