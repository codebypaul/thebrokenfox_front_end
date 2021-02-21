import {Form, Button, InputGroup, FormControl} from 'react-bootstrap'

export default function Checkout() {
    return (
        <>
        <div className="row m-0">
            <div className="col-md-6">
            <div className="card">
                <Form>
                    <div>
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
                    </div>
                    <div>
                    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Address</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">City</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">State</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-default">Zip</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
    />
  </InputGroup>
                    </div>
                    <Button type="submit" variant="outline-success">
                        Purchase
                    </Button>
                </Form>
            </div>
            </div>
            <div className="col-md-6">
                <div className="card">
                    <Button variant="outline-dark">
                        Back to Cart
                    </Button>
                    <hr/>
                    <span>Items : 0</span>
                    <span>Total : $0.00</span>
                </div>
            </div>
        </div>
        </>
    )
}