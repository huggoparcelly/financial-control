import { Button, Form } from "react-bootstrap";

import './styles.css'
import { ChangeEvent, FormEvent, useState } from "react";
import { Expense } from "../../models/expense";

export default function Expenses() {

    const [expensesInfo, setExpensesInfo] = useState<Expense>({
        description: "",
        amount: 0.00,
        type: ""
    });

    const [formData, setFormData] = useState([] as Expense[]);

    const handleAdd = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newData = { ...expensesInfo }

        setFormData([...formData, newData])

        setExpensesInfo({
            description: "",
            amount: 0.00,
            type: ""
        })

        // verificar a lista

        console.log(formData);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;

        setExpensesInfo({
            ...expensesInfo,
            [name]: value
        })

    }

    return (

        <Form className="form-container " onSubmit={handleAdd}>
            <h2>Despesas</h2>
            <div className="inputs-container">

                <Form.Group className="m-3">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Descrição"
                        name="description"
                        onChange={handleChange}
                    />
                </Form.Group>

                {/* Colocar máscara com a virgula ou ponto*/}
                <Form.Group className="m-3">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="R$ 0.00"
                        name="amount"
                        onChange={handleChange}
                    />
                </Form.Group>

            </div>

            <div key='inline-radio' className="bnt-radio mb-3">

                <Form.Check
                    inline
                    type='radio'
                    id='radio-entrada'
                    label='Entrada'
                    name="type"
                    value="entrada"
                    onChange={handleChange}
                />
                <Form.Check
                    inline
                    type='radio'
                    id='radio-saida'
                    label='Saida'
                    className="ms-3"
                    name="type"
                    value="saida"
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <Button
                    variant="success"
                    className="me-4"
                    type="submit"
                >
                    Adicionar
                </Button>
                <Button variant="danger">Limpar</Button>
            </div>

        </Form>
    )
}