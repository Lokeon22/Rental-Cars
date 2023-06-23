export type Cars = {
  id: number;
  name: string;
  description: string;
  daily_rate: number;
  available: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  created_at: Date;
  image: CarImage[] | [];
  category: CategoryCars;
};

type CategoryCars = {
  car_id: number;
  category_name: string;
  category_description: string;
  created_at: Date;
};

type CarImage = {
  id: number;
  car_id: number;
  image_name: string;
  created_at: Date;
};
