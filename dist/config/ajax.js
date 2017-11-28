'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _env = require('./env.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// import interfaces from '../interfaces'


exports.default = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options.url = _env.baseUrl + options.url;

            if (options.header) {
              options.header['x-wechat-session'] = _wepy2.default.getStorageSync('_session');
            } else {
              options.header = {
                'x-wechat-session': _wepy2.default.getStorageSync('_session')
              };
            }

            if (options.method == 'post') {
              options.header = {
                'Content-Type': 'appliction/x-www-form-urlencoded'
              };
            }
            options.method = options.method.toUpperCase();

            _context.next = 6;
            return _wepy2.default.request(options);

          case 6:
            response = _context.sent;

            if (!(response.statusCode === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return', response);

          case 11:
            _wepy2.default.showModal({
              title: '提示',
              content: '\u670D\u52A1\u5668\u9519\u8BEF\u3002'
            });

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function ajax(_x) {
    return _ref.apply(this, arguments);
  }

  return ajax;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFqYXguanMiXSwibmFtZXMiOlsib3B0aW9ucyIsInVybCIsImhlYWRlciIsImdldFN0b3JhZ2VTeW5jIiwibWV0aG9kIiwidG9VcHBlckNhc2UiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJzdGF0dXNDb2RlIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiYWpheCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7QUFEQTs7OztxRUFJZSxpQkFBb0JBLE9BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxvQkFBUUMsR0FBUixHQUFjLGVBQVVELFFBQVFDLEdBQWhDOztBQUVBLGdCQUFJRCxRQUFRRSxNQUFaLEVBQW9CO0FBQ2xCRixzQkFBUUUsTUFBUixDQUFlLGtCQUFmLElBQXFDLGVBQUtDLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBckM7QUFDRCxhQUZELE1BRU87QUFDTEgsc0JBQVFFLE1BQVIsR0FBaUI7QUFDZixvQ0FBb0IsZUFBS0MsY0FBTCxDQUFvQixVQUFwQjtBQURMLGVBQWpCO0FBR0Q7O0FBR0QsZ0JBQUlILFFBQVFJLE1BQVIsSUFBa0IsTUFBdEIsRUFBOEI7QUFDNUJKLHNCQUFRRSxNQUFSLEdBQWlCO0FBQ2YsZ0NBQWdCO0FBREQsZUFBakI7QUFHRDtBQUNERixvQkFBUUksTUFBUixHQUFpQkosUUFBUUksTUFBUixDQUFlQyxXQUFmLEVBQWpCOztBQWpCYTtBQUFBLG1CQW1CUSxlQUFLQyxPQUFMLENBQWFOLE9BQWIsQ0FuQlI7O0FBQUE7QUFtQlRPLG9CQW5CUzs7QUFBQSxrQkE4QlRBLFNBQVNDLFVBQVQsS0FBd0IsR0E5QmY7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBK0JKRCxRQS9CSTs7QUFBQTtBQWlDWCwyQkFBS0UsU0FBTCxDQUFlO0FBQ2JDLHFCQUFPLElBRE07QUFFYkM7QUFGYSxhQUFmOztBQWpDVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztXQUFlQyxJOzs7O1NBQUFBLEkiLCJmaWxlIjoiYWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCBpbnRlcmZhY2VzIGZyb20gJy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7XHJcbiAgYmFzZVVybFxyXG59IGZyb20gJy4vZW52JztcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYWpheChvcHRpb25zKSB7XHJcbiAgb3B0aW9ucy51cmwgPSBiYXNlVXJsICsgb3B0aW9ucy51cmxcclxuICBcclxuICBpZiAob3B0aW9ucy5oZWFkZXIpIHtcclxuICAgIG9wdGlvbnMuaGVhZGVyWyd4LXdlY2hhdC1zZXNzaW9uJ10gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdfc2Vzc2lvbicpXHJcbiAgfSBlbHNlIHtcclxuICAgIG9wdGlvbnMuaGVhZGVyID0ge1xyXG4gICAgICAneC13ZWNoYXQtc2Vzc2lvbic6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ19zZXNzaW9uJylcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBpZiAob3B0aW9ucy5tZXRob2QgPT0gJ3Bvc3QnKSB7XHJcbiAgICBvcHRpb25zLmhlYWRlciA9IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWN0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgIH1cclxuICB9XHJcbiAgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZC50b1VwcGVyQ2FzZSgpXHJcbiAgXHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgd2VweS5yZXF1ZXN0KG9wdGlvbnMpXHJcblxyXG4gIC8vICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDQwMSkge1xyXG4gIC8vICAgICAvLyBhd2FpdCBpbnRlcmZhY2VzLmxvZ2luKClcclxuICAvLyAgICAgLy8gcmV0dXJuIGF3YWl0IHJlcXVlc3Qob3B0aW9ucylcclxuICAvLyAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzQ29kZSA9PT0gNTAwKSB7XHJcbiAgLy8gICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAvLyAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgLy8gICAgICAgY29udGVudDogYOacjeWKoeWZqOmUmeivr++8jOivt+aIquWbvuacrOaPkOekuu+8jOW5tuiBlOezu+a3seWkp+axquWzsOOAgiR7cmVzcG9uc2UuZGF0YS5lcnJtc2d9YFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfSBlbHNlXHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgfSBlbHNlIHtcclxuICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICBjb250ZW50OiBg5pyN5Yqh5Zmo6ZSZ6K+v44CCYFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19