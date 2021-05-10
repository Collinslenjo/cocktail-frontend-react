import React, { useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import CocktailForm from './sub_components/cocktail_form';
import CocktailView from './sub_components/cocktail_view';
import CustomDrink from './sub_components/custom-drinks';
import MainComponent from './sub_components/main-component';
import RandomDrink from './sub_components/random_drink';


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
                <span style={{ marginLeft: '10px' }}></span>
                <Form inline>
                    <Link className="nav-item" to='/random'>
                        <Button className="btn-warning">Get random drink</Button>
                    </Link>
                </Form>
                <Form inline>
                    <Button className="btn-success" style={{ marginLeft: '10px' }} onClick={() => setmodalShow(true)}>Add a Custom Cocktail</Button>
                </Form>
            </Navbar>

            <CocktailForm modalShow={modalShow} setmodalShow={setmodalShow} />

            <Switch>
                <Route exact path="/" component={MainComponent} />
                <Route exact path="/custom" component={CustomDrink} />
                <Route exact path="/random" component={RandomDrink} />
                <Route exact path="/view" component={CocktailView} />
            </Switch>

        </>
    );
}

export default MainPage;