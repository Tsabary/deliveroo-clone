export type Restaurant = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Array<any>;
  long: number;
  lat: number;
};

export type Dish = {
  id: string;
  name: string;
  short_description: string;
  image: string;
  price: number;
};
