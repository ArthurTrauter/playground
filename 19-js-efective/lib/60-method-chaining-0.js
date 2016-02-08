// Methoden die mehrmals hintereinander aufgerufen werden können
// in einer Kette

function escapeBasicHtml(str) {
   return str.replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&apos;");
}

console.log(escapeBasicHtml("<html><head><title>Was geht'n ab</title></head>" +
'<body>Wir sind alles nur "BErliner"</body>'));

var records = [{
   "username": "Arthur",
   "alter": 36
},
{
   "username": "Irina",
   "alter": 32
},
{
   "username": "Tim",
   "alter": 4
},
{
   "username": "Lina",
   "alter": 1
}];

var users = records.map(function (record) {
   return record.username;
})
.filter(function (username) {
   return !!username;
})
.map(function (username) {
   return username.toLowerCase();
});

console.log(users);
