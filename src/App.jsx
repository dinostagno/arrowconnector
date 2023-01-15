import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default class App extends Component {
  state = {
    client_id: "",
    client_secret: "",
    type_org: "",
    check_tos: "",
  };

  onSubmit = () => {
    console.log(this.state.client_id);
    console.log(this.state.client_secret);
    console.log(this.state.type_org);
    console.log(this.state.check_tos);

    var callSf =
      this.state.client_id &&
      this.state.client_secret &&
      this.state.type_org &&
      this.state.check_tos
        ? (window.location.href = 
            "https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=" +
            this.state.client_id +
            "&redirect_uri=http://localhost:3000/")
        : toast("campos vacios");
    
    // //     var url = window.location.href;
    // // console.log('esta es la url', url);
    // // var c = url.searchParams.get("code");
    // // if (c) {
    // //   console.log('codigo', c);
    // }    
    const [searchParams ,setSearchParams] = useSearchParams()
    const searchCode = searchParams.get('code');
    console.log('codigo:', searchCode);
 

  };

  render() {
    return (
      <Container>
        <Row className="mt-4 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
              <ToastContainer />
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>client id</Form.Label>
                    <Form.Control
                      className="mb-3"
                      value={this.state.client_id}
                      required
                      onChange={(e) =>
                        this.setState({ client_id: e.target.value })
                      }
                      type="text"
                    />
                    <Form.Label>client secret</Form.Label>
                    <Form.Control
                      className="mb-3"
                      value={this.state.client_secret}
                      required
                      onChange={(e) =>
                        this.setState({ client_secret: e.target.value })
                      }
                      type="text"
                    />
                    <Form.Label>select your org</Form.Label>
                    <Form.Select
                      className="mb-3"
                      aria-label="Select your type Org"
                      required
                      onChange={(e) =>
                        this.setState({ type_org: e.target.value })
                      }
                    >
                      <option value="1">-seleccione una opcion-</option>
                      <option value="1">Production Org</option>
                      <option value="2">Sandbox Org</option>
                    </Form.Select>
                    <Form.Check
                      className="mb-3"
                      required
                      type="checkbox"
                      label="I AM A SALESFORCE ADMINISTRATOR"
                      onChange={(e) =>
                        this.setState({ check_tos: e.target.value })
                      }
                    />
                    <Button
                      className="btnFormSend"
                      variant="outline-success"
                      onClick={this.onSubmit}
                    >
                      Save Config
                    </Button>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
