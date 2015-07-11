console.log(process.cwd());

function bad() {
  require('fs').readFile('/');
};

bad();


// Start mit
// DEBUG=01-fs.js npm start
// generiert einen STart über die package.json

// STart mit
// env NODE_DEBUG=fs iojs 01-fs.js
// startet Node und generiert einen Backlog für die fs-funktion
