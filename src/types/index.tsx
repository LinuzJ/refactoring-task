export interface ProductData {
  id?: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  rating?: Rating;
  isFavorite?: boolean;
}

export interface Rating {
  rate: number;
  count: number;
}
