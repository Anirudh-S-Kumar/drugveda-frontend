export interface NameLink{
    name: string;
    link: string;
}

export interface ListItem {
    name: string;
    href: string;
}

export interface CartItem {
    pid: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface LabTest {
    id: string;
    name: string;
    price: number;
    quantity: number;
    appointment: string;
}