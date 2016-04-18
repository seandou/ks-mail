'use strict';

class Mail {

  constructor(app) {
    this.app = app;

    app.debug('middleware - mail loaded');
  }


}

module.exports = Mail;