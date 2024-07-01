export interface UserType {
  id: number;
  email: string;
  photo_path: string;
  information: {
    id: number;
    first_name: string;
    last_name: string;
    created_by: number | null;
    user_id: number;
    created_at: string;
    updated_at: string;
  };
  created_at: string;
  updated_at: string;
}

export interface CategoryType {
  id: number;
  name: string;
  description: string;
  icon: string;
  status: number;
}

export interface PetType {
  id: number;
  name: string;
  description: string;
  breed: string;
  age: string;
  weight: string;
  color: string;
  banner: string;
  sex: string;
  birth_date: string;
  is_vaccinated: boolean;
  ong_id: number;
  category_id: number;
  ong: any;
}

export interface OngType {
  name: string;
  description: string;
  cnpj: string;
  phone: string;
  status: string;
  approved_at: string;
  approved_by: number;
  user_id: number;
  responsible_name: string;
  responsible_phone: string;
  responsible_cpf: string;
}

export interface OrderType {
  id: number;
  status: string;
  ong: OngType;
  pet: PetType;
  adopter: UserType;
}
