export interface Category{
    name: string
}

export interface Portfolio {
    image: string,
    about: string,
    client: string,
    date: string,
    category: Category,
    detail: string,
}