import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import {  Card, CardBody, CardImg, CardFooter } from "reactstrap";
import { getPaintingById } from "../../Managers/PaintingManager";
import { addOrder } from "../../Managers/OrderManager";

export const AddMyOrder = () => {
	const { paintingId } = useParams();
	const user = JSON.parse(localStorage.getItem("userProfile"));
	const navigate = useNavigate();
    const [painting, setPainting] = useState([]);
	const [order, setOrder] = useState({
		orderDate: "",
		userProfileId: parseInt(user.id),
		TotalAmount: 0,
        paintingId: paintingId,
	});
	

	const handleAddComment = (e) => {
		e.preventDefault();
		const copy = { ...order };
		copy.orderDate = new Date();
		return addOrder(copy).then(() => {});
	};
	useEffect(() => {
		getPaintingById(paintingId).then((painting) => setPainting(painting));
	}, [paintingId]);

	return (<>
		
				
				
				<Button color='primary' onClick={(e) => handleAddComment(e)}>
					Save
				</Button>
		
      
	</>);
};