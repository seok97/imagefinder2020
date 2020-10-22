const express = require("express")
const router = express.Router()
const client = require("cheerio-httpcli")

router.get("/", function (req, res, next) {
  var getdata = req.query
  console.log(getdata.q)
  if (getdata.q != (undefined || null)) {
    const searchkeyword = encodeURI(getdata.q)
    const google =
      "http://www.google.com/search?q=" + searchkeyword + "&tbm=isch"
    var param = {}
    var sendData = []
    client.fetch(google, param, function (err, $, body) {
      if (err) {
        console.log("Error:", err)
        return
      }
      var index = 0
      $("a.wXeWr,.islib,.nfEiy,.mM5pbd img").each(function (idx) {
        if (idx < 40) {
          var data_src = $(this).attr("data-src")
          var alt = $(this).attr("alt")

          /*
          sendData.push({
            alt: alt,
            src: data_src,
            idx: index,
          })
          */

          //var src = $(this).attr('src');

          // src = URL.resolve(url, src);

          //log(idx);
          //log('alt : '+alt);
          //log('data_src : ' +data_src);
          //log('src : ' +src);
        }

        if (idx > 40 && idx % 2 != 0) {
          var data_src = $(this).attr("data-src")
          var alt = $(this).attr("alt")

          //var src = $(this).attr('src');
          sendData.push({
            alt: alt,
            src: data_src,
            idx: index,
          })
          index++
          // src = URL.resolve(url, src);

          //log(idx);
          //log('alt : '+alt);
          //log('data_src : ' +data_src);
          //log('src : ' +src);
        }
      })
      res.send({ imaglist: sendData })
    })
  } else {
    res.send({ data: "fail..." })
  }
})

module.exports = router
