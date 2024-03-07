import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./adminPainting.css"

export const CreateButton = () => {
    const navigate = useNavigate(); 
    return (
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