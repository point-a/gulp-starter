function sayHello() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c Made with ❤️ by Point Agency 🔞 %c https://point-agency.net/ %c \n\n', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log('Made with love ❤️ Point Agency - https://point-agency.net/  ❤️');
  }
}
module.exports = sayHello;
