// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// export function App() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control  type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }
//
// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

// export function App() {
//   return (
//     <div>
//       <Container>
//         <Row className="vh-100 d-flex justify-content-center align-items-center">
//           <Col md={8} lg={6} xs={12}>
//             <Card className="shadow">
//               <Card.Body>
//                 <div className="mb-3 mt-md-4">
//                   <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
//                   <p className=" mb-5">Please enter your login and password!</p>
//                   <div className="mb-3">
//                     <Form>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label className="text-center">
//                           Email address
//                         </Form.Label>
//                         <Form.Control type="email" placeholder="Enter email" />
//                       </Form.Group>

//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicPassword"
//                       >
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" placeholder="Password" />
//                       </Form.Group>
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCheckbox"
//                       >
//                         <p className="small">
//                           <a className="text-primary" href="#!">
//                             Forgot password?
//                           </a>
//                         </p>
//                       </Form.Group>
//                       <div className="d-grid">
//                         <Button variant="primary" type="submit">
//                           Login
//                         </Button>
//                       </div>
//                     </Form>
//                     <div className="mt-3">
//                       <p className="mb-0  text-center">
//                         Don't have an account?{" "}
//                         <a href="{''}" className="text-primary fw-bold">
//                           Sign Up
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

// export function App() {
  
// return (
// <div>
//     <Container>
//         <Row className="mt-4 d-flex justify-content-center align-items-center">
//             <Col md={8} lg={6} xs={12}>
//             <Card className="shadow">
//                 <Card.Body>
//                     <Form>
//                         <Form.Group className="mb-3" controlId="client_id">
//                             <Form.Label>client_id</Form.Label>
//                             <Form.Control type="text" placeholder="Enter client_id" />
//                             {/* <Form.Text className="text-muted">
//                                 We'll never share your email with anyone else.
//                             </Form.Text> */}
//                         </Form.Group>
//                         <Form.Group className="mb-3" controlId="client_secret">
//                             <Form.Label>client_secret</Form.Label>
//                             <Form.Control type="text" placeholder="client_secret" />
//                         </Form.Group>
//                         <Form.Select className="mb-3" aria-label="Select your type Org">
//                           <option value="1">Production Org</option>
//                           <option value="2">Sandbox Org</option>
//                         </Form.Select>
//                         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                             <Form.Check type="checkbox" label="Accept termines service" />
//                         </Form.Group>
//                         <Button variant="primary" type="submit">
//                             Submit
//                         </Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//             </Col>
//         </Row>
//     </Container>
// </div>
// );
// }
/////
// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";

// export default class App extends Component {
//   state = {
//     val: ""
//   };

//   onSubmit = () => {
//     console.log(this.state.val);
//   };

//   render() {
//     return (
//       <Form.Group className="m-0">
//         <Form.Control
//           className="textFeedback"
//           as="textarea"
//           rows="3"
//           placeholder="feedback"
//           value={this.state.val}
//           onChange={e => this.setState({ val: e.target.value })}
//           type="text"
//         />
//         <Button
//           className="btnFormSend"
//           variant="outline-success"
//           onClick={this.onSubmit}
//         >
//           Send Feedback
//         </Button>
//       </Form.Group>
//     );
//   }
// }





