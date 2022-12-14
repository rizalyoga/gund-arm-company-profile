import axios from "axios";
import { AllMemberDataType } from "./getDataAllMember";

export const getDetailDataMember = async (id: string | undefined) => {
  try {
    const response = await axios.get<AllMemberDataType>(
      `https://jsonplaceholder.typicode.com/users/${id}`
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
