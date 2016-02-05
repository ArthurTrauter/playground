function Alert(parent, message, opts) {
  opts = extend({
    width: 320,
    height: 240
  });
  opts = extend({
    x: (parent.width / 2) - (opts.width / 2),
    y: (parent.height / 2) - (opts.height / 2),
    title: "Alert",
    titleColor: "grey",
    bgColor: "white",
    textColor: "black",
    icon: "info",
    modal: false
  }, opts);

  this.width = opts.width;
  this.height = opts.height;
  this.x = opts.x;
  this.y = opts.y;
  this.title = opts.title;
  this.titleColor = opts.titleColor;
  this.bgColor = opts.bgColor;
  this.textColor = opts.textColor;
  this.icon = opts.icon;
  this.modal = opts.modal;
  this.message = message;
}

var alert = new Alert({}, "Whats up?", {
  width: 50,
  height: 40,
  title: "Error",
  titleColor: "blue",
  bgColor: "white",
  textColor: "black",
  icon: "error",
  modal: true
});

console.log(alert.title);
