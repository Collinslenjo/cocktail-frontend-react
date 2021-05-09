import React, { useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import CocktailForm from './sub_components/cocktail_form';
import CustomDrink from './sub_components/custom-drinks';
import MainComponent from './sub_components/main-component';


const MainPage = () => {
    const [modalShow, setmodalShow] = useState(false);

    return (
        <>
            <Navbar className="navigationbar">
                <Navbar.Brand href="/#">
                    <h1>Cocktail</h1>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/#">Home</Nav.Link>
                    <Nav.Link href="/custom">Latest Custom drinks</Nav.Link>
                </Nav>
                <Form inline>
                    <Button className="btn-warning">Get random drink</Button>
                </Form>
                <Form inline>
                    <Button className="btn-success" onClick={() => setmodalShow(true)}>Add a Custom Cocktail</Button>
                </Form>
            </Navbar>

            <CocktailForm modalShow={modalShow} setmodalShow={setmodalShow} />

            <Switch>
                <Route exact path="/" component={MainComponent} />
                <Route exact path="/custom" component={CustomDrink} />
            </Switch>

        </>
    );
}

export default MainPage;