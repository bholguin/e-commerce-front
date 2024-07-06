export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    stock: number;
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