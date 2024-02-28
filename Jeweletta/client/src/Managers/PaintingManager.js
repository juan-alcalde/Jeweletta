const baseUrl = 'https://localhost:5001/api/Painting';

export const getAllPaintings = () => {
    return fetch(baseUrl) 
      .then((res) => res.json())
  };

  export const getPaintingById =(id) => {
    return fetch (`${baseUrl}/${id}`).then((res)=> res.json())
   };