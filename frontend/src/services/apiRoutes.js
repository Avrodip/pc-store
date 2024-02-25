
export const apiRoutes = {

    // Authentication Routes
    login: 'api/auth/login',
    register: 'api/auth/register',

    getUserDetailsByID: 'api/auth/getUserByID',
    // End

    // Cart Routes

    // End

    // Configure Cart
    addUpdateCart: "api/cart/updateCart",
    cartProductList: "api/cart/getCartList",
    deleteCartProduct: "api/cart/deleteCart",
    // End

    // Checkout
    addUpdateBillingAddress: "api/billingAddress/updateBillingAddress",
    addUpdateShippingAddress: "api/shippingAddress/updateShippingAddress",

    getBillingAddressList: "api/billingAddress/getBillingAddressList",
    getShippingAddressList: "api/shippingAddress/getShippingAddressList",

    getBillingAddressByID: "api/billingAddress/getBillingAddressByID",
    getShippingAddressByID: "api/shippingAddress/getShippingAddressByID",
    getCartProductByArray: "api/cart/getProductByArrayList",
    // END
}