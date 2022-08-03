import React, { useEffect, useState } from 'react';
import './ShoppingBag.css';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Cupon from './Cupon';
import CouponData from '../../../../Data/CouponData';
import { useRef } from 'react';
const ShoppingBag = (props) => {
    const [coupnCode, setCuponCode] = useState('');
    const [input, setInput] = useState();
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [value3, setValue3] = useState(1);
    const [subTotal, setSubTotal] = useState(480);
    const [total, setTotal] = useState(510);
    const [discount, setDiscount] = useState(0);
    const [offerShopping, setOfferShopping] = useState(0);
     const [disabled, setDisabled] = useState(false);
    
        
    var Datas = {
        value1: value1,
        value2: value2,
        value3: value3,
        subTotal: subTotal,
        total: total,
    };

    const incBtn1 = () => {
        setValue1(value1 + 1);
        setSubTotal(subTotal + 160);

        setTotal(subTotal - discount + 30 + 160);
    };
    const incBtn2 = () => {
        setValue2(value2 + 1);
        setSubTotal(subTotal + 160);

        setTotal(subTotal - discount + 30 + 160);
    };
    const incBtn3 = () => {
        setValue3(value3 + 1);
        setSubTotal(subTotal + 160);

        setTotal(subTotal - discount + 30 + 160);
    };
    const decBtn1 = () => {
        if (value1 > 1) {
            setValue1(value1 - 1);
            setSubTotal(subTotal - 160);

            setTotal(subTotal - discount - 160 + 30);
        }
    };
    const decBtn2 = () => {
        if (value2 > 1) {
            setValue2(value2 - 1);
            setSubTotal(subTotal - 160);

            setTotal(subTotal - discount - 160 + 30);
        }
    };
    const decBtn3 = () => {
        if (value3 > 1) {
            setValue3(value3 - 1);
            setSubTotal(subTotal - 160);

            setTotal(subTotal - discount - 160 + 30);
        }
    };
    const cuponClick = () => {
        CouponData.map((item) => {
            if (item.code === input) {
                const dis = subTotal - (subTotal * item.discount) / 100;
                setDiscount(dis);
                setTotal(subTotal - dis + 30);
                setOfferShopping(item.discount);
                console.log('dis', dis);
                console.log('sub', subTotal);
                console.log(item.discount);
                console.log(typeof item.discount);
            }
        });
        setDisabled(!disabled);
    };
    const inputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <Card.Body className="shopping-bag pb-5">
                <Container>
                    <Container
                        fluid
                        className="d-flex justify-content-center py-5"
                    >
                        <Card.Title className="fs-3 fw-bold">
                            {props.bagData.yourShopping}
                        </Card.Title>
                        <Card.Title className="text-danger ps-2 fs-3 fw-bold">
                            {props.bagData.Bag}
                        </Card.Title>
                    </Container>

                    <Row>
                        <Col lg={8} md={8} sm={8}>
                            <Card.Title className="item-details">
                                {props.bagData.itemDetails}
                            </Card.Title>

                            {/* <hr /> */}
                            <Card.Body className="d-flex p-0">
                                <Card.Body className="p-0">
                                    <Card.Img
                                        className="img-fluid"
                                        src="static/img/meat.png"
                                        alt="meat"
                                    />
                                </Card.Body>
                                <Card.Body className="w-100 p-0">
                                    <Card.Body className="ps-4 py-0">
                                        <Card.Body className="d-flex justify-content-between p-0">
                                            <Card.Body className="p-0">
                                                <Card.Title>
                                                    {props.bagData.itemHeading}
                                                </Card.Title>
                                                <Card.Text>
                                                    {props.bagData.itemquantity}
                                                </Card.Text>
                                                <Card.Title className="text-danger">
                                                    {props.bagData.itemPrice}
                                                </Card.Title>
                                                <Card.Text>
                                                    {props.bagData.itemweight}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Text className="p-0">
                                                <Card.Img
                                                    className="img-fluid"
                                                    src="static/img/quit 1.png"
                                                    alt=""
                                                />
                                            </Card.Text>
                                        </Card.Body>

                                        <Card.Body className="inc-dec-btn pb-4 pt-2 px-0">
                                            <Card.Body
                                                className="btn-group p-0"
                                                role="group"
                                                aria-label="Basic outlined example bg-white "
                                            >
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline-none bg-white  py-0 my-0 rounded-3 text-dark"
                                                    onClick={decBtn1}
                                                >
                                                    {/* {props.bagData.decBtn} */}
                                                    -
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3 text-dark"
                                                >
                                                    {/* {props.bagData.val} */}
                                                    {value1}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline bg-white  text-dark rounded-3"
                                                    onClick={incBtn1}
                                                >
                                                    {/* {props.bagData.incBtn} */}
                                                    +
                                                </Button>
                                            </Card.Body>
                                        </Card.Body>
                                        {/* <hr /> */}
                                    </Card.Body>
                                </Card.Body>
                            </Card.Body>

                            <Card.Body className="d-flex p-0">
                                <Card.Body className="px-0">
                                    <Card.Img
                                        className="img-fluid"
                                        src="static/img/coffe.png"
                                        alt="meat"
                                    />
                                </Card.Body>
                                <Card.Body className="w-100 p-0">
                                    <Card.Body className="ps-4 ">
                                        <Card.Body className="d-flex justify-content-between px-0 py-1">
                                            <Card.Body className="p-0">
                                                <Card.Title>
                                                    {props.bagData.itemHeading}
                                                </Card.Title>
                                                <Card.Text>
                                                    {props.bagData.itemquantity}
                                                </Card.Text>
                                                <Card.Title className="text-danger">
                                                    {props.bagData.itemPrice}
                                                </Card.Title>
                                                <Card.Text>
                                                    {props.bagData.itemweight}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Title>
                                                <Card.Img
                                                    className="img-fluid"
                                                    src="static/img/quit 1.png"
                                                    alt=""
                                                />
                                            </Card.Title>
                                        </Card.Body>

                                        <Card.Body className="inc-dec-btn pb-4 pt-2 px-0">
                                            <Card.Body
                                                className="btn-group p-0"
                                                role="group"
                                                aria-label="Basic outlined example bg-white "
                                            >
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline-none bg-white  py-0 my-0 rounded-3 text-dark"
                                                    onClick={decBtn2}
                                                >
                                                    {/* {props.bagData.decBtn} */}
                                                    -
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3 text-dark"
                                                >
                                                    {/* {props.bagData.val} */}
                                                    {value2}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline bg-white  text-dark rounded-3"
                                                    onClick={incBtn2}
                                                >
                                                    {/* {props.bagData.incBtn} */}
                                                    +
                                                </Button>
                                            </Card.Body>
                                        </Card.Body>
                                    </Card.Body>

                                    {/* <hr /> */}
                                </Card.Body>
                            </Card.Body>
                            <Card.Body className="d-flex p-0">
                                <Card.Body className="p-0">
                                    <Card.Img
                                        className="img-fluid"
                                        src="static/img/meat.png"
                                        alt="meat"
                                    />
                                </Card.Body>
                                <Card.Body className="w-100 p-0">
                                    <Card.Body className="ps-2 py-0 ">
                                        <Card.Body className="d-flex justify-content-between ">
                                            <Card.Body className="p-0">
                                                <Card.Title>
                                                    {props.bagData.itemHeading}
                                                </Card.Title>
                                                <Card.Text>
                                                    {props.bagData.itemquantity}
                                                </Card.Text>
                                                <Card.Title className="text-danger">
                                                    {props.bagData.itemPrice}
                                                </Card.Title>
                                                <Card.Text>
                                                    {props.bagData.itemweight}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Text>
                                                <Card.Img
                                                    className="img-fluid"
                                                    src="static/img/quit 1.png"
                                                    alt=""
                                                />
                                            </Card.Text>
                                        </Card.Body>

                                        <Card.Body className="inc-dec-btn pb-4 pt-2 px-0  ">
                                            <Card.Body
                                                className="btn-group"
                                                role="group"
                                                aria-label="Basic outlined example bg-white "
                                            >
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline-none bg-white  py-0 my-0 rounded-3 text-dark"
                                                    onClick={decBtn3}
                                                >
                                                    {/* {props.bagData.decBtn} */}
                                                    -
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline bg-white mx-1 px-4 py-0 my-0 rounded-3 text-dark"
                                                >
                                                    {/* {props.bagData.val} */}
                                                    {value3}
                                                </Button>
                                                <Button
                                                    type="button"
                                                    className="btn btn-outline bg-white  text-dark rounded-3"
                                                    onClick={incBtn3}
                                                >
                                                    {/* {props.bagData.incBtn} */}
                                                    +
                                                </Button>
                                            </Card.Body>
                                        </Card.Body>
                                    </Card.Body>
                                </Card.Body>
                            </Card.Body>
                            {/* <hr /> */}
                            <Card.Body className="d-grid gap-2 col-6  py-4 px-0">
                                <Button
                                    className="btn btn-danger"
                                    type="button"
                                >
                                    {props.bagData.button}
                                </Button>
                            </Card.Body>
                        </Col>

                        <Col lg={4} md={4}>
                            <Card.Body className="pt-1 pb-1 px-0">
                                <Card.Title>
                                    {props.orderSummaryData.OrderSummeryHeading}
                                </Card.Title>
                            </Card.Body>
                            <Card.Body className="bg-white rounded-3 container py-3">
                                <Card.Body className="d-flex justify-content-between py-0 px-0">
                                    <Card.Text className="mb-0">
                                        Sub-total:
                                    </Card.Text>
                                    <Card.Text className="mb-0">
                                        {/* {props.orderSummaryData.SubTotal} */}
                                        {subTotal}.00$
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className="d-flex justify-content-between px-0 py-1">
                                    <Card.Text className="m-0 p-0">
                                        Shipping:
                                    </Card.Text>
                                    <Card.Text className="mb-0">
                                        {props.orderSummaryData.Shipping}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className="d-flex justify-content-between px-0 py-1">
                                    <Card.Text className="mb-0">
                                        {/* Coupon discount: */}
                                        <input
                                            type="text"
                                            placeholder="Enter your cupon code"
                                            className="border-1"
                                            //     value=""
                                            onChange={inputChange}
                                        />
                                    </Card.Text>
                                    <Card.Text
                                        className="mb-0 text-danger applyCupon"
                                        onClick={cuponClick}
                                    >
                                        Apply Coupon
                                    </Card.Text>
                                    {/* <p>{coupnCode}</p> */}

                                    {/* <Cupon
                                        setOfferShopping={setOfferShopping}
                                        data={Datas}
                                        setCuponcode={setCuponCode}
                                        setDiscount={setDiscount}
                                        // setTotal={setTotal}
                                    /> */}
                                </Card.Body>

                                <Card.Body className="d-flex justify-content-between px-0 py-0">
                                    <Card.Text className="mb-0">
                                        Discount({offerShopping}%):
                                    </Card.Text>
                                    <Card.Text className="mb-0">
                                        {/* {props.orderSummaryData.Vat} */}
                                        {discount}.00
                                    </Card.Text>
                                </Card.Body>
                                {/* <hr /> */}
                                <Card.Body className="d-flex justify-content-between py-0">
                                    <Card.Text>Total amount:</Card.Text>
                                    <Card.Text>
                                        {/* {props.orderSummaryData.TotalAmount} */}
                                        {total}.00$
                                    </Card.Text>
                                </Card.Body>
                            </Card.Body>

                            <Card.Body className="d-grid gap-2 col-12 mx-auto py-3  px-0">
                                <Button
                                    className="btn btn-danger"
                                    type="button"
                                >
                                    {props.orderSummaryData.CheckOut}
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </>
    );
};

export default ShoppingBag;
