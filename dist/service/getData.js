'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.postInvoiceOrder = exports.getLoginCode = undefined;

var _ajax = require('./../config/ajax.js');

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 授权code
var getLoginCode = exports.getLoginCode = function getLoginCode() {
    return new Promise(function (resolve, reject) {
        wx.login({
            success: function success(res) {
                // success
                resolve(res.code);
            },
            fail: function fail(res) {
                // fail
                reject(res);
            }
        });
    });
};

// 例子：
// 创建发票订单接口
var postInvoiceOrder = exports.postInvoiceOrder = function postInvoiceOrder(params) {
    return (0, _ajax2.default)({
        url: '/api/invoice_orders',
        params: params,
        method: 'POST'
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldERhdGEuanMiXSwibmFtZXMiOlsiZ2V0TG9naW5Db2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ3eCIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJmYWlsIiwicG9zdEludm9pY2VPcmRlciIsInVybCIsInBhcmFtcyIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFDQTtBQUNPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUM5QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLFdBQUdDLEtBQUgsQ0FBUztBQUNMQyxtQkFESyxtQkFDR0MsR0FESCxFQUNRO0FBQ1Q7QUFDQUwsd0JBQVFLLElBQUlDLElBQVo7QUFDSCxhQUpJO0FBS0xDLGdCQUxLLGdCQUtBRixHQUxBLEVBS0s7QUFDTjtBQUNBSix1QkFBT0ksR0FBUDtBQUNIO0FBUkksU0FBVDtBQVVILEtBWE0sQ0FBUDtBQVlILENBYk07O0FBZVA7QUFDQTtBQUNPLElBQU1HLDhDQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsV0FBVSxvQkFBSztBQUMzQ0MsYUFBSyxxQkFEc0M7QUFFM0NDLHNCQUYyQztBQUczQ0MsZ0JBQVE7QUFIbUMsS0FBTCxDQUFWO0FBQUEsQ0FBekIiLCJmaWxlIjoiZ2V0RGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhamF4IGZyb20gJy4uL2NvbmZpZy9hamF4J1xyXG4vLyDmjojmnYNjb2RlXHJcbmV4cG9ydCBjb25zdCBnZXRMb2dpbkNvZGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmNvZGUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBmYWlsXHJcbiAgICAgICAgICAgICAgICByZWplY3QocmVzKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG4vLyDkvovlrZDvvJpcclxuLy8g5Yib5bu65Y+R56Wo6K6i5Y2V5o6l5Y+jXHJcbmV4cG9ydCBjb25zdCBwb3N0SW52b2ljZU9yZGVyID0gcGFyYW1zID0+IGFqYXgoe1xyXG4gICAgdXJsOiAnL2FwaS9pbnZvaWNlX29yZGVycycsXHJcbiAgICBwYXJhbXMsXHJcbiAgICBtZXRob2Q6ICdQT1NUJ1xyXG59KSJdfQ==