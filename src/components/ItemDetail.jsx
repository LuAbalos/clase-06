import ItemCount from "./ItemCount";
import React from "react";
import {CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert("You have selected" + qty + "items.")
    }
    return (
        <>
        {
                <CardGroup>
                    <Card key={item.id}>
                        <CardImg
                        alt="Card image cap"
                        src={item.img[0]}
                        top
                        width="100%"
                        />
                    <CardBody>
                    <CardTitle tag="h5">
                        {item.nombre}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {item.descripcion}
                    </CardSubtitle>
                    <CardText>
                        {item.precio}
                        {item.stock} unidades en stock
                    </CardText>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                    </CardBody>
                </Card>
                </CardGroup>
        }
        </>
    );
}

export default ItemDetail;