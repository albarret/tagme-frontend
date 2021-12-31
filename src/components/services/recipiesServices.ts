import axios from "axios";

const recipeServices = {
    findAllRecipies: async () => {
      return await axios.get("http://localhost:3001/api/recipies");
    },

    // Para o momento, buscar todas as receitas é suficiente. Para o futuro, outros métodos poderiam ser acrescentados.
  };
  
  export default recipeServices;
  