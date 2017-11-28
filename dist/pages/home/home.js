'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _counter = require('./../../components/counter.js');

var _counter2 = _interopRequireDefault(_counter);

var _getData = require('./../../service/getData.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_wepy$page) {
    _inherits(Home, _wepy$page);

    function Home() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Home);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.components = { counter: _counter2.default }, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Home, [{
        key: 'onLoad',
        value: function onLoad() {
            (0, _getData.getLoginCode)().then(function (code) {
                console.log(code);
            });
        }
    }]);

    return Home;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Home , 'pages/home/home'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbmZpZyIsImNvbXBvbmVudHMiLCJjb3VudGVyIiwiZGF0YSIsIm1ldGhvZHMiLCJldmVudHMiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNvZGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFJcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsTSxHQUFTLEUsUUFDVEMsVSxHQUFhLEVBQUNDLDBCQUFELEUsUUFFYkMsSSxHQUFPLEUsUUFDUEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7O2lDQUNBO0FBQ0wseUNBQWVDLElBQWYsQ0FBb0IsZ0JBQU07QUFDdEJDLHdCQUFRQyxHQUFSLENBQVlDLElBQVo7QUFDSCxhQUZEO0FBR0g7Ozs7RUFaNkIsZUFBS0MsSTs7a0JBQWxCWCxJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBDb3VudGVyIGZyb20gJ2NvdW50ZXInO1xyXG5pbXBvcnQge1xyXG4gIGdldExvZ2luQ29kZVxyXG59IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2V0RGF0YSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge307XHJcbiAgICBjb21wb25lbnRzID0ge2NvdW50ZXI6IENvdW50ZXJ9O1xyXG5cclxuICAgIGRhdGEgPSB7fTtcclxuICAgIG1ldGhvZHMgPSB7fTtcclxuXHJcbiAgICBldmVudHMgPSB7fTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBnZXRMb2dpbkNvZGUoKS50aGVuKGNvZGU9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29kZSlcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIC8vIE90aGVyIHByb3BlcnRpZXNcclxufVxyXG4iXX0=