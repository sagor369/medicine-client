export type TCategoryData = {
    _id: string
    name: string;
    slug: string;
    thumbnail: string;
    categoryType: string;
    isDeleted: boolean;
}
export type TCategory = {
  data: {
    result: TCategoryData
  };
};

