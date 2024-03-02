import React from "react";
import "./adminPainting.css"
import { Button} from "reactstrap";
import { deletePainting } from "../../Managers/PaintingManager";
import { useNavigate } from "react-router";


export const AdminPainting = ({ painting }) => {
  const navigate = useNavigate();
  const deletePaintingById = (id) => {
    const confirmDelete = window.confirm("Do you really want to delete this item? ");
    if (confirmDelete) {
      deletePainting(id).then(() => {  window.location.reload();})
    }
  }
  const editButton = () => {
    
      return <>
      <Button color="warning" onClick={() => navigate(`/painting/edit/${painting.id}`)}>Edit</Button>
      </>
  }
  return (
    <tr key={painting.id}>
    <td></td>
    <td>{painting.title}</td>
    <td>{painting.description}</td>
    <td>{painting.dimensions}</td>
    <td>{painting.category.name}</td>
    <td>{painting.price}</td>
    <td><img src={painting.imageLocation} alt={painting.name} style={{ maxWidth: '100px', maxHeight: '100px' }} /></td>
    <td>{editButton()} </td>
    <td><Button className="table-button" color= "danger" onClick={() => deletePaintingById(painting.id)}>Delete</Button></td>
  </tr>
  );
};
