import {FormControl, InputGroup, Form, Button} from 'react-bootstrap'
import styled from 'styled-components'
export default function Home() {
    return (
        <div className="">
            <div className="row m-0 p-5"></div>
            <div className="row m-0 p-5">
                <DiscountCard>
                    <h1>Feeling Lucky?</h1>

                </DiscountCard>
            </div>
            <div className="row m-0 p-5">
                <h1>
                    Recently Added
                </h1>
            </div>
            <div className="row m-0 p-5">
                <h1>Sign Up for our new letter</h1>
                <h3>Get coupon code and information on our latest releases...</h3>
                <Form className="w-100">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <Button variant="primary" type="submit" className="mr-auto">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

const DiscountCard = styled.div`
    border: 1px solid rgb(100,100,100);
    border-radius: .5rem;
    box-shadow: 0 5px 5px 2px rgba(100,100,100,1);
    padding: 4rem;
    margin: 0 auto;
    background: rgba(0,200,0,1);
`