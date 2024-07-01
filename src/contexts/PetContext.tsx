import React, {createContext, useState, ReactNode} from 'react';
import {AxiosResponse} from 'axios';
import api from '../services/api';
import {PetType, CategoryType, OrderType} from '../interfaces';

const PetContext = createContext<PetContextDataType>({} as PetContextDataType);

interface PetProviderProps {
  children: ReactNode;
}

interface PetContextDataType {
  categories: CategoryType[];
  pets: PetType[];
  orders: OrderType[];
  getCategories: () => Promise<AxiosResponse<GetCategoriesResponse>>;
  getPets: () => Promise<AxiosResponse<GetPetsResponse>>;
  adoptPet: (petId: number) => Promise<AxiosResponse<AdoptPetResponse>>;
  getOrders: () => Promise<AxiosResponse<GetOrdersResponse>>;
}

interface GetCategoriesResponse {
  data: CategoryType[];
}

interface GetPetsResponse {
  data: PetType[];
}

interface AdoptPetResponse {
  data: OrderType;
}

interface GetOrdersResponse {
  data: OrderType[];
}

const PetProvider = ({children}: PetProviderProps) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [pets, setPets] = useState<PetType[]>([]);
  const [orders, setOrders] = useState<OrderType[]>([]);

  async function getCategories() {
    try {
      const response = await api.get<GetCategoriesResponse>('/categories');
      setCategories(response.data.data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async function getPets() {
    try {
      const response = await api.get<GetPetsResponse>('/pets');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async function adoptPet(petId: number) {
    try {
      const response = await api.post<AdoptPetResponse>('/adopters/orders', {
        pet_id: petId,
      });
      setOrders([...orders, response.data.data]);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async function getOrders() {
    try {
      const response = await api.get<GetOrdersResponse>('/ok');
      setOrders(response.data.data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  return (
    <PetContext.Provider
      value={{
        categories,
        pets,
        orders,
        getCategories,
        getPets,
        adoptPet,
        getOrders,
      }}>
      {children}
    </PetContext.Provider>
  );
};

export {PetProvider, PetContext};
