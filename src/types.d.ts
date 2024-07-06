export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface Order {
    active: boolean
    createAt: string
    id?: number
    userId: number
    total: number
    user?: User
}

export interface User {
    id?: number
    firstname: string
    isAdmin: boolean
    lastname: string
    username: string
}

export interface UserOrder {
    product: Product
    amount: number
}

export interface NavBarOption {
    label: string;
    route: string;
    hasOrders?: boolean;
}

export interface OrderProduct  {
    amount: number
    price: number
    productId: number
}

export interface OderDetails {
    order: Order
    products: Array<{
        amount: number
        product: Product
    }>
}