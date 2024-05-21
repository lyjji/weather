function _0x9703() {
  const _0x4367b1 = [
    "main",
    "speed",
    "description",
    "error",
    "26950OmPqFv",
    "#des",
    "now",
    "log",
    "textContent",
    "icon",
    "336232kKxWrC",
    "66367mBKbar",
    "setAttribute",
    "&appid=",
    "coords",
    "ec39aa1d7e29a92c2287474dd13caf48",
    "426363cuuHGe",
    "#name",
    "216358htneqg",
    "&units=metric&lang=kr",
    "classList",
    "http://openweathermap.org/img/wn/",
    "96VVdRcM",
    "weather",
    "longitude",
    "temp",
    "lat",
    "1913418WCqyBz",
    "target",
    "3JkVHRn",
    "name",
    "m/s",
    "querySelector",
    "geolocation",
    "json",
    "2225949pQYugK",
    ".navi\x20li",
    "wind",
    "10ZLzqOZ",
    "https://api.openweathermap.org/geo/1.0/direct?q=",
    "add",
    "#icon",
    "Error\x20getting\x20current\x20position:",
    "getCurrentPosition",
    "https://api.openweathermap.org/data/2.5/weather?lat=",
    "length",
    "latitude",
    "12rafwcq",
  ];
  _0x9703 = function () {
    return _0x4367b1;
  };
  return _0x9703();
}
const _0x2b7737 = _0x15d5;
(function (_0x26f4a8, _0x2dccb0) {
  const _0x602203 = _0x15d5,
    _0x4ca3bd = _0x26f4a8();
  while (!![]) {
    try {
      const _0x454e6c =
        -parseInt(_0x602203(0xd5)) / 0x1 +
        (parseInt(_0x602203(0xdc)) / 0x2) * (-parseInt(_0x602203(0xe7)) / 0x3) +
        (-parseInt(_0x602203(0xe0)) / 0x4) *
          (-parseInt(_0x602203(0xce)) / 0x5) +
        (-parseInt(_0x602203(0xf9)) / 0x6) *
          (-parseInt(_0x602203(0xda)) / 0x7) +
        parseInt(_0x602203(0xd4)) / 0x8 +
        -parseInt(_0x602203(0xe5)) / 0x9 +
        (parseInt(_0x602203(0xf0)) / 0xa) * (parseInt(_0x602203(0xed)) / 0xb);
      if (_0x454e6c === _0x2dccb0) break;
      else _0x4ca3bd["push"](_0x4ca3bd["shift"]());
    } catch (_0x4b4e69) {
      _0x4ca3bd["push"](_0x4ca3bd["shift"]());
    }
  }
})(_0x9703, 0x1a782);
const api_key = _0x2b7737(0xd9);
function _0x15d5(_0x1c6236, _0x27b0a0) {
  const _0x97035c = _0x9703();
  return (
    (_0x15d5 = function (_0x15d5ee, _0x50d590) {
      _0x15d5ee = _0x15d5ee - 0xcc;
      let _0x53ceb5 = _0x97035c[_0x15d5ee];
      return _0x53ceb5;
    }),
    _0x15d5(_0x1c6236, _0x27b0a0)
  );
}
let cname = document[_0x2b7737(0xea)](_0x2b7737(0xdb)),
  iconImg = document[_0x2b7737(0xea)](_0x2b7737(0xf3)),
  des = document[_0x2b7737(0xea)](_0x2b7737(0xcf)),
  temp = document[_0x2b7737(0xea)]("#temp"),
  wind = document[_0x2b7737(0xea)]("#wind"),
  navi = document["querySelectorAll"](_0x2b7737(0xee)),
  cityname = _0x2b7737(0xd0);
for (let i = 0x0; i < navi[_0x2b7737(0xf7)]; i++) {
  navi[i]["addEventListener"]("click", (_0x5c85e9) => {
    const _0x115090 = _0x2b7737;
    for (j of navi) {
      j[_0x115090(0xde)]["remove"]("on");
    }
    navi[i][_0x115090(0xde)][_0x115090(0xf2)]("on"),
      (cityname = _0x5c85e9[_0x115090(0xe6)]["id"]),
      getWeather(cityname);
  });
}
const getPosition = () => {
    return new Promise((_0x159958, _0x38575f) => {
      const _0x2ead0d = _0x15d5;
      navigator[_0x2ead0d(0xeb)][_0x2ead0d(0xf5)](_0x159958, _0x38575f);
    });
  },
  getWeather = async (_0x4ca04d) => {
    const _0x2db2f6 = _0x2b7737;
    let _0x196a37, _0x148e1e;
    if (_0x4ca04d == _0x2db2f6(0xd0))
      try {
        const _0x21a0aa = await getPosition();
        (_0x196a37 = _0x21a0aa[_0x2db2f6(0xd8)][_0x2db2f6(0xf8)]),
          (_0x148e1e = _0x21a0aa["coords"][_0x2db2f6(0xe2)]);
      } catch (_0x449a14) {
        console[_0x2db2f6(0xcd)](_0x2db2f6(0xf4), _0x449a14);
        return;
      }
    else {
      let _0x4981f5 = await fetch(
          _0x2db2f6(0xf1) +
            _0x4ca04d +
            _0x2db2f6(0xd7) +
            api_key +
            _0x2db2f6(0xdd)
        ),
        _0x1624c3 = await _0x4981f5[_0x2db2f6(0xec)]();
      (_0x196a37 = _0x1624c3[0x0][_0x2db2f6(0xe4)]),
        (_0x148e1e = _0x1624c3[0x0]["lon"]);
    }
    let _0x4afc8b = await fetch(
        _0x2db2f6(0xf6) +
          _0x196a37 +
          "&lon=" +
          _0x148e1e +
          "&appid=" +
          api_key +
          "&units=metric&lang=kr"
      ),
      _0x1eb93b = await _0x4afc8b[_0x2db2f6(0xec)]();
    console[_0x2db2f6(0xd1)](_0x1eb93b),
      (temp[_0x2db2f6(0xd2)] =
        _0x1eb93b[_0x2db2f6(0xfa)][_0x2db2f6(0xe3)] + "˚"),
      (des[_0x2db2f6(0xd2)] = _0x1eb93b[_0x2db2f6(0xe1)][0x0][_0x2db2f6(0xcc)]),
      (cname[_0x2db2f6(0xd2)] = _0x1eb93b[_0x2db2f6(0xe8)]),
      (wind[_0x2db2f6(0xd2)] =
        _0x1eb93b[_0x2db2f6(0xef)][_0x2db2f6(0xfb)] + _0x2db2f6(0xe9)),
      (iconon = _0x1eb93b[_0x2db2f6(0xe1)][0x0][_0x2db2f6(0xd3)]),
      (iconUrl = _0x2db2f6(0xdf) + iconon + "@2x.png"),
      iconImg[_0x2db2f6(0xd6)]("src", iconUrl);
  };
getWeather(cityname);
