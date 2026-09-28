export interface MenuItem {
  id: string;
  name: string;
  bengaliName?: string;
  category: 'signatures' | 'pastries' | 'korean-buns' | 'cakes' | 'savories' | 'coffee';
  categoryLabel: string;
  description: string;
  price: string;
  isVegetarian: boolean;
  isEggless?: boolean;
  image: string;
  highlight?: string;
  tastingNotes?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  theme: string;
  comment: string;
  favoriteItem?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
  tag: string;
}
