import { Row, Col,  Input, Form, Button, message } from "antd"
import { useAuth } from "../context/AuthProvider/useAuth"
import { useNavigate } from "react-router-dom"
import "../style/login.css"

export const Login = () => {

    const auth = useAuth()
    const navigate = useNavigate();

    async function onFinish (values) {
        
        console.log('aq luiz');
        try {
            
            await auth.authenticate( values.email, values.password )
            navigate("postcontroller/mod")

        } catch (error) {
            console.log(error);
            message.error("invalid email or passoword")
            
        }
    }

    return (

    <div className="fundoLogin">

        
        <Row className="linha"
         
        >
            <Col className="coluna">

                <Form
                   className="col"
                    onFinish={onFinish}
                >

                    <Form.Item
                        className="inEmail"
                        label='Email'
                        name='email'
                    >
                        <Input />

                    </Form.Item>
                    <Form.Item
                        className="inSenha"
                        label='password'
                        name='password'
                    >
                        <Input.Password />

                    </Form.Item>
                    <Form.Item >
                        <Button  type='primary' htmlType="submit" className="inButton">
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </div>
    )

}