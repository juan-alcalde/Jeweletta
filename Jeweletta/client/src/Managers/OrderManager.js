const baseUrl = 'https://localhost:5001/api/Order';

export const getAllOrders  = () => {
    return fetch(baseUrl) 
      .then((res) => res.json())
  };

