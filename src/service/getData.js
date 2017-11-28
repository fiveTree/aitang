import ajax from '../config/ajax'
// 授权code
export const getLoginCode = () => {
    return new Promise((resolve, reject) => {
        wx.login({
            success(res) {
                // success
                resolve(res.code)
            },
            fail(res) {
                // fail
                reject(res)
            },
        })
    })
}

// 例子：
// 创建发票订单接口
export const postInvoiceOrder = params => ajax({
    url: '/api/invoice_orders',
    params,
    method: 'POST'
})