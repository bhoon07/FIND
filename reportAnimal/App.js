import React from "react";
import { FormBtn, Input, TextArea } from "../../../rice-hou-fsf-ft-07-2020-u-c/21-MERN/01-Activities/05-Stu_ReactRouter/Solved/client/src/components/Form";
import { Col, Row } from "../../../rice-hou-fsf-ft-07-2020-u-c/21-MERN/01-Activities/05-Stu_ReactRouter/Solved/client/src/components/Grid";
import Button from "../reportAnimal/Button";

function App () {
    return(
        <Container>
            <Row>
                <Col size="md-6">
                    <h1>Report Lost Animal</h1>
                    <form>
                        <Input
                        OnChange={handleInputChange}
                        name="name"
                        placeholder="Name"
                        />
                        <Input
                        OnChange={handleInputChange}
                        name="species"
                        placeholder="Species"
                        />
                        <Input
                        OnChange={handleInputChange}
                        name="gender"
                        placeholder="Gender"
                        />
                        <Input
                        OnChange={handleInputChange}
                        name="age"
                        placeholder="Age"
                        />
                        <Input
                        OnChange={handleInputChange}
                        name="location"
                        placeholder="Location"
                        />
                        <TextArea
                        OnChange={handleInputChange}
                        name="description"
                        placeholder="How to approach your animal"
                        />
                        <FormBtn
                        disabled={!(formObject.name && formObject.species && formObject.gender && formObject.age && formObject.location)}
                        onClick={hanleFormSubmit}
                        >
                            Sumbit
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}