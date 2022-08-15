export interface Restaurant {
    name: string,
    image_url: string,
    categories: string[],
    price: string,
    review_count: number,
    rating: number,
}

export interface Food {
    title: string,
    description: string,
    price: string,
    image: string,
}