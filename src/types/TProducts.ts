export type TProduct = {
  _id: string;
  name: string;
  brand: string
  slug: string;
  photos: string[];
  description: string;
  metaKey: string;
  price: number;
  isDeleted: boolean;
  discount?: number;
  stockStatus: boolean;
  status: "active" | "inactive";
  categories: {
    primaryCategoryId?: string;
    secondaryCategoryId?: string;
    tertiaryCategoryId?: string;
  };
};
