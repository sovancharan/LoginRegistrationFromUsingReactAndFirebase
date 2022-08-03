import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CouponData from '../../../../Data/CouponData';

function Cupon({
    setOfferShopping,
    data,
    setCuponcode,
    setDiscount,
    setTotal,
}) {
    const [show, setShow] = useState(false);
    const [offer, setOffer] = useState();
  
    const inpRef = React.useRef();
    const handleClose = () => {
        let value = inpRef.current.value;
        CouponData.find((item) => {
            if (item.code === value) {
                console.log('itrm', item.value_per);
                setShow(false);
            }
        });
    };
    console.log('Datas', data);

    const handleShow = () => setShow(true);



    const handleSubmit = () => {
        let value = inpRef.current.value;

        CouponData.find((item) => {
            if (item.code === value) {
                setOffer(item.value_per);
                setOfferShopping(item.value_per);
               
                   
                setCuponcode(value);
                setDiscount(data.total * (parseInt(item.value_per) / 100));
                setTotal((data.total * (parseInt(item.value_per) / 100)));
                console.log("total",data.total);
            }
        });

        setShow(false);
    };
    console.log('Ofer', offer);
    console.log('DataTotal', data.subTotal);
    return (
        <>
            <Button variant="" onClick={handleShow}>
                Apply cupon code
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form onClick={(e) => e.preventDefault()}>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Apply your cupon code </Form.Label>
                            <div>
                                <input
                                    ref={inpRef}
                                    type="text"
                                    placeholder="Enter your cupon code"

                                    // onChange={(e) => setInput(e.target.value)}
                                />
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cupon;
