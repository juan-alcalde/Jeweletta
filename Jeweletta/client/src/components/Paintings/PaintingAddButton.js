import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./adminPainting.css"

export const CreateButton = () => {
    const navigate = useNavigate(); // convert useNavigate function to variable for easy invoking
    return (// this is the form qith on click to navigate to /create page
      <>
       <button
            onClick={() => navigate("/painting/add")}
            color=""
            
            className="outlined-btn">
                Add New Painting
            </button>
      </>
    );
  };