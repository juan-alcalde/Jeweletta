import { useState, useEffect } from "react";
import { getAllCategories } from "../../Managers/CategoryManager";
import { addPainting } from "../../Managers/PaintingManager";
import { useNavigate } from "react-router-dom";

export const PaintingForm = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const getCategories = () => {
        getAllCategories().then(allCategories => setCategories(allCategories));
    };

    useEffect(() => {
        getCategories();
    }, []);

    const [painting, update] = useState({
        title: "",
        description: "",
        price: "",
        imageLocation: "",
        dimensions: "",
        isSold: false,
        categoryId: 0,
    });

    const handleSaveButtonClick = (event) => {
        event.preventDefault();
        console.log("You clicked the button.");

        const paintingToSendToAPI = {
            Title: painting.title,
            Description: painting.description,
            Price: painting.price,
            ImageLocation: painting.imageLocation,
            Dimensions: painting.dimensions,
            IsSold: false,
            CategoryId: painting.categoryId,
        };

        return addPainting(paintingToSendToAPI)
            .then(() => {
                navigate("/");
            });
    };

    const selectList = (event) => {
        const copy = { ...painting };
        copy.categoryId = event.target.value;
        update(copy);
    };

    return (
        <div>
            <form className="PostForm">
                <h2 className="postForm__title">New Painting</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="Title">Title:</label>
                        <input
                            required
                            autoFocus
                            type="text"
                            id="title"
                            value={painting.title}
                            onChange={(evt) => {
                                const copy = { ...painting };
                                copy.title = evt.target.value;
                                update(copy);
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="imageLoction">Image Url:</label>
                        <input
                            required
                            autoFocus
                            type="text"
                            id="imageLocation"
                            value={painting.imageLocation}
                            onChange={(evt) => {
                                const copy = { ...painting };
                                copy.imageLocation = evt.target.value;
                                update(copy);
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            required
                            autoFocus
                            type="text"
                            id="description"
                            value={painting.description}
                            onChange={(evt) => {
                                const copy = { ...painting };
                                copy.description = evt.target.value;
                                update(copy);
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            required
                            autoFocus
                            type="number"
                            id="price"
                            value={painting.price}
                            onChange={(evt) => {
                                const copy = { ...painting };
                                copy.price = evt.target.value;
                                update(copy);
                            }}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="dimensions">Dimensions:</label>
                        <input
                            required
                            autoFocus
                            type="text"
                            id="dimensions"
                            value={painting.dimensions}
                            onChange={(evt) => {
                                const copy = { ...painting };
                                copy.dimensions = evt.target.value;
                                update(copy);
                            }}
                        />
                    </div>
                </fieldset>
                {/* dynamic drop down mapping through the categories and allowing the user to select a category when creating a new post form */}
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="category-select">Category</label>
                        <select
                            id="type"
                            value={painting.categoryId}
                            onChange={(event) => selectList(event)}
                        >
                            <option value="0">Select a category</option>
                            {categories.map((category) => {
                                return (
                                    <option value={category.id} key={category.id}>
                                        {category.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </fieldset>
                <button
                    className="btn btn-primary"
                    onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                >
                    Submit Post
                </button>
            </form>
        </div>
    );
};
