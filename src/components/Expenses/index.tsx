import { Button, Form } from "react-bootstrap";

import './styles.css'

export default function Expenses() {
    return (

        <Form className="form-container ">
            <h2>Despesas</h2>
            <div className="inputs-container">

                <Form.Group className="m-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control type="text" placeholder="Descrição" />
                </Form.Group>

                {/* Colocar máscara com a virgula e remover as setas*/}
                <Form.Group className="m-3">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control type="number" placeholder="R$ 0.00" />
                </Form.Group>

            </div>

            <div key='inline-radio' className="bnt-radio mb-3">

                <Form.Check
                    inline
                    type='radio'
                    id='radio-entrada'
                    label='Entrada'
                    name="group1"
                />
                <Form.Check
                    inline
                    type='radio'
                    id='radio-saida'
                    label='Saida'
                    name="group1"
                    className="ms-3"
                />
            </div>

            <div className="mb-3">
                <Button variant="success" className="me-4">Adicionar</Button>
                <Button variant="danger">Limpar</Button>
            </div>

        </Form>
    )
}