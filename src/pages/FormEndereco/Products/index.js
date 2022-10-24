import React from "react";
import "./styles.css";
import { CardActionArea, CardContent, Card, Divider } from "@mui/material";

export default function Products() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        setItems([
            {
                id: 1,
                nome: "Pizza",
                valor: 29.90
            },
            {
                id: 2,
                nome: "Pratinho Gourmet",
                valor: 12.90
            }
        ])
    }, []);

    const CadaProduto = (props) => {
        return (
            <Card style={{marginTop: '10px'}}>
                <CardActionArea>
                    <CardContent>
                        {props.nome} {props.valor}
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

    return (
        <div>
            <h2>Quantidade de produtos {items.length}</h2>

            <hr />

            {items.map( p => <CadaProduto {...p} />)}
        </div>
    )
}