class NewsController {
  //([GET] /news)
  index(req, res) {
    res.render('news');
  }

  //([GET] /news)
  show(req, res) {
    res.send('news cai moi');
  }
}

module.exports = new NewsController();
