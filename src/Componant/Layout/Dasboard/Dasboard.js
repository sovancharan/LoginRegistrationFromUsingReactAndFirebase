import React from 'react';
import { useAuth } from '../Context/AuthContext';
import { useHistory } from 'react-router-dom';

import { Button, Card, Stack } from 'react-bootstrap';

const Dasboard = () => {
    const dasboard = useHistory();
    //  const product=
    const { curentUser, logout } = useAuth();
    const products = () => {
        dasboard.push('/');
    };
    const contactUs=()=>{
      dasboard.push('/contactUs')
    }
    async function handleSubmit(e) {
        try {
            await logout();
        } catch {
            alert('can not log out');
        }
    }
    console.log('dasboard=',curentUser);
    return (
        <>
            {curentUser && (
                <Card className="d-flex align-items-center border-0">
                    <div className="fs-1">Dasboard</div>
                    <Stack
                        className="justify-content-center"
                        direction="horizontal"
                        gap={2}
                    >
                        <Button onClick={handleSubmit} as="a" variant="primary">
                            Log Out
                        </Button>
                        <Button onClick={products} as="a" variant="success">
                            Products
                        </Button>
                        <Button onClick={contactUs} as="a" variant="success">
                            ContactUs
                        </Button>
                    </Stack>
                </Card>
            )}
            {!curentUser && dasboard.push('./login')}
        </>
    );
};

export default Dasboard;
