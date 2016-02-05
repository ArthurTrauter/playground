function Alert(parent, message, opts) {
  opts = opts || {}; // Standardmäßig ein leeres options objekt anlegen
  this.width = opts.width === undefined ? 320 : opts.width;
  this.height = opts.height === undefined ? 320 : opts.height;
  this.x = opts.x === undefined ? (parent.width / 2) - (this.width / 2) : opts.x;
  this.y = opts.y === undefined ? (parent.height / 2) - (this.height / 2) : opts.y;
  this.title = opts.title || "Alert";
  this.titleColor = opts.titleColor || "grey";
  this.bgColor = opts.bgColor || "white";
  this.textColor = opts.textColor || "black";
  this.icon = opts.icon || "info";
  this.modal = !!opts.modal;
  this.message = message;
}

var alert = new Alert(app, message, {
  width: 50,
  height: 40,
  title: "Error",
  titleColor: "blue",
  bgColor: "white",
  textColor: "black",
  icon: "error",
  modal: true
});
