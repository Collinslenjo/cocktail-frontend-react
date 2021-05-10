import { Formik, Field, Form as FormikForm } from "formik";
import { Modal, Form as BootstrapForm } from "react-bootstrap";

interface CocktailFormInterface {
    drink_id: string,
    cocktail_name: string,
    cocktail_type: string,
    cocktail_details: Array<any>
};

const CocktailForm = (props: any) => {

    const CocktailInitialValues: CocktailFormInterface = {
        drink_id: '',
        cocktail_name: '',
        cocktail_type: '',
        cocktail_details: []
    };

    const create_cocktail = (data: string) => {
        console.log(data)
        let items = localStorage.getItem("custom_drinks")
        console.log(items)
        var all_drinks = []
        if (items === null || items === undefined || items === "") {
            // continue
        } else {
            all_drinks = JSON.parse(items)
        }
        all_drinks.push(data)
        localStorage.setItem("custom_drinks", JSON.stringify(all_drinks))
    }

    return (
        <>
            <Modal
                size="lg"
                show={props.modalShow}
                onHide={() => props.setmodalShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Create A New Jackpot
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={CocktailInitialValues}
                        onSubmit={(values, actions) => {
                            let data = JSON.stringify(values, null, 2)
                            create_cocktail(data)
                            actions.setSubmitting(false);
                        }}
                        render={({ values }) => (
                            <FormikForm>
                                {/* JACKPOT DETAILS */}
                                <BootstrapForm.Group>
                                    <label htmlFor="jackpot_name">Cocktail Name</label>
                                    <Field className="form-control form-control-inline" id="cocktail_name" name="cocktail_name" placeholder="Margarita" />
                                    <br />
                                    <label className="form-label" htmlFor="jackpot_id">Drink ID</label>
                                    <Field className="form-control form-control-inline" id="drink_id" name="drink_id" placeholder="15515" />
                                    <br />
                                    <label className="form-label" htmlFor="market">Cocktail Type</label>
                                    <Field className="form-control form-control-inline" id="cocktail_type" name="cocktail_type" placeholder="custom" />
                                    <br />
                                    <label className="form-label" htmlFor="market">Cocktail Type</label>
                                    <Field component="textarea" className="form-control form-control-inline" id="cocktail_details" name="cocktail_details" placeholder="ingredients, etc" />
                                </BootstrapForm.Group>
                                <br />
                                <button className="btn btn-success" type="submit">Submit</button>
                            </FormikForm>
                        )} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CocktailForm;