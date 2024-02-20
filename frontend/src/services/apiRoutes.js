
export const apiRoutes = {

    // Authentication Routes
    login: 'api/auth/login',
    register: 'api/auth/register',
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

    getBillingAddressByID: "api/billingAddress/getBillingAddressList",
    getShippingAddressByID: "api/shippingAddress/getShippingAddressList",
    // END
}