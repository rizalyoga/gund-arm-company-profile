import axios from "axios";

type GeoObject = {
  lat: string;
  lng: string;
};

type AddressObject = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoObject;
};

type CompanyObject = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressObject;
  phone: string;
  website: string;
  company: CompanyObject;
};

export const datas = async () => {
  try {
    const response = await axios.get<Users[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
    } else {
      console.log("unexpected error: ", error);
    }
  }
};
