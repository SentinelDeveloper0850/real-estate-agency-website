export interface IProperty {
  id?: number;
  name: string;
  price: number;
  type: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  amenities?: string;
  summary?: string;
  description?: string;
  likes?: string;
  viewings?: string;
  status?: string;
}