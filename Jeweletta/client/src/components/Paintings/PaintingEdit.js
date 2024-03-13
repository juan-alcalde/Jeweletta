
import { useEffect, useState } from "react";
import { Container, Input, InputGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editPainting, getPaintingById } from "../../Managers/PaintingManager";


export const PaintingEdit = () => {
    const [painting, setPainting] = useState({
                        title: "",
                        description: "",
                        price: "",
                        imageLocation: "",
                        dimensions: "",
                        isSold: false,
                        categoryId: 0,
        
            })
	const navigate = useNavigate();
    const { id } = useParams()


    useEffect(() => {
        getPaintingById(id)
            .then((data) => {
                setPainting(data)
            })
        }, [id])


	const handleSubmit = (e) => {
		
		return editPainting(painting).then(() => navigate("/paintings/admin"));
	};
	return (
		<div>
     <form class="cool-form">
         <h2 className="postForm__title">Edit Painting Details</h2>
         <fieldset>
             <div className="form-group">
                 <label htmlFor="title">Title:</label>
                 <Input
					placeholder='Title'
                    value={painting.title}
                           onChange={(evt) => {
                                const copy = { ...painting };
                               copy.title = evt.target.value;
                           setPainting(copy);
					}}
				/>
         </div>                 </fieldset>
                 <fieldset>
                     <div className="form-group">
                         <label htmlFor="imageLoction">Image Url:</label>
                    <Input
					placeholder='ImageLocation'
                    value={painting.imageLocation}
                           onChange={(evt) => {
                                const copy = { ...painting };
                               copy.imageLocation = evt.target.value;
                           setPainting(copy);
					}}
				/>
                     </div>
                 </fieldset>
                 <fieldset>
                     <div className="form-group">
                         <label htmlFor="description">Description:</label>
                       <Input
					placeholder='Description'
                    value={painting.description}
                           onChange={(evt) => {
                                const copy = { ...painting };
                               copy.description = evt.target.value;
                           setPainting(copy);
					}}
				/>
                     </div>
                 </fieldset>
                 <fieldset>
                     <div className="form-group">
                         <label htmlFor="price">Price:</label>
                         <Input
					placeholder='Price'
                    value={painting.price}
                           onChange={(evt) => {
                                const copy = { ...painting };
                               copy.price = evt.target.value;
                           setPainting(copy);
					}}
				/>
                     </div>
                 </fieldset>
                 <fieldset>
                     <div className="form-group">
                         <label htmlFor="dimensions">Dimensions:</label>
                       <Input
					placeholder='Dimensions'
                    value={painting.dimensions}
                           onChange={(evt) => {
                                const copy = { ...painting };
                               copy.dimensions = evt.target.value;
                           setPainting(copy);
					}}
				/>
                    </div>
               </fieldset>
               {/* dynamic drop down mapping through the categories and allowing the user to select a category when creating a new post form */}
               
               <Button color='primary' onClick={(e) => handleSubmit(e)}>
					Save
                    </Button>
   </form>
 </div>)
	;
};