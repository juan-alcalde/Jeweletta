const baseUrl = 'https://localhost:5001/api/Painting';

export const getAllPaintings = () => {
    return fetch(baseUrl) 
      .then((res) => res.json())
  };

  export const getPaintingById =(id) => {
    return fetch (`${baseUrl}/${id}`).then((res)=> res.json())
   };

   export const addPainting = (singlePainting) => { 
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singlePainting),
    });
  };