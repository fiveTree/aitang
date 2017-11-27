'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _counter = require('./../../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Daily = function (_wepy$page) {
    _inherits(Daily, _wepy$page);

    function Daily() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Daily);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Daily.__proto__ || Object.getPrototypeOf(Daily)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = { counter: _counter2.default }, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Daily, [{
        key: 'onLoad',
        value: function onLoad() {}
    }]);

    return Daily;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Daily , 'pages/daily/daily'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhaWx5LmpzIl0sIm5hbWVzIjpbIkRhaWx5IiwiY29uZmlnIiwiY29tcG9uZW50cyIsImNvdW50ZXIiLCJkYXRhIiwibWV0aG9kcyIsImV2ZW50cyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0M7Ozs7Ozs7Ozs7OztJQUVvQkEsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVMsRSxRQUNUQyxVLEdBQWEsRUFBQ0MsMEJBQUQsRSxRQUViQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVUsRSxRQUVWQyxNLEdBQVMsRTs7Ozs7aUNBQ0EsQ0FBRTs7OztFQVJvQixlQUFLQyxJOztrQkFBbkJQLEsiLCJmaWxlIjoiZGFpbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiBpbXBvcnQgQ291bnRlciBmcm9tICdjb3VudGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhaWx5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHt9O1xyXG4gICAgY29tcG9uZW50cyA9IHtjb3VudGVyOiBDb3VudGVyfTtcclxuXHJcbiAgICBkYXRhID0ge307XHJcbiAgICBtZXRob2RzID0ge307XHJcblxyXG4gICAgZXZlbnRzID0ge307XHJcbiAgICBvbkxvYWQoKSB7fTtcclxuICAgIC8vIE90aGVyIHByb3BlcnRpZXNcclxufVxyXG4iXX0=