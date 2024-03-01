import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const CreateButton = () => {
    const navigate = useNavigate(); // convert useNavigate function to variable for easy invoking
    return (// this is the form qith on click to navigate to /create page
      <>
       <Button
            onClick={() => navigate("/painting/add")}
            color="primary"
            
            className="btn btn-primary">
                Create 
            </Button>
      </>
    );
  };