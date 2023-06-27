export interface RentCar {
  id: number;
  car_id: number;
  user_id: number;
  start_date: string;
  end_date: string;
  expected_return_date: string;
  total: number;
  created_at: Date;
  updated_at: Date;
}
