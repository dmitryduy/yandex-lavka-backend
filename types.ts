
export interface ISubCategory {
    id: string,
    text: string,
    image: string,
    grid: number
}

export interface ICatalogItem {
    id: number,
    category: 'catalog',
    image: string,
    text: string,
    subcategories: ISubCategory[]
}