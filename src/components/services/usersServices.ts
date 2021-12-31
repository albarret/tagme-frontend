import axios from 'axios';

export interface User {
  nome: string,
  password: string
}

const userServices = {
    authenticateUser: async (user: User): Promise<any> => {
      return await axios.post("http://localhost:3001/api/user", user);
    }
    // Para o momento, apenas recuperar os usuários é suficiente. Para o futuro, outros métodos poderiam ser acrescentados.
  };
  
  export default userServices;
  