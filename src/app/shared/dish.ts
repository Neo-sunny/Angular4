import { comment } from  './comment';

export class Dish {
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comment: comment[];
}
