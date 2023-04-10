import { IProduct } from "../interfaces/product";
import instance from "./instance";

export const getProduct = () => {
    return instance.get('/product')
}

export const getById = (id: string) => {
    const uri = "/product/" + id
    return instance.get(uri)
}
export const remove = (id: string) => {
    const uri = "/product/" + id
    return instance.delete(uri)
}

export const addProduct = (product: IProduct) => {
    return instance.post('/product', product, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const login = (data: { email: string, password: string }) => {
    return instance.post('/signin', data)
}

export const signup = (data: { name: string, email: string, password: string, confirmPassword: string }) => {
    return instance.post('/signup', data)
}