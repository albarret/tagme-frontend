import React, { useState } from "react";
import { Form, Button, Input, Alert } from "antd";
import { loginIcon, keyIcon, bigLogo } from "../../images";
import userServices, { User } from "../services/usersServices";
import './login.scss';

const { Item } = Form;

const Login = (props: any) => {

	const [loginFailed, setHasFailed] = useState(false);

	const onFinish = (values: any) => {
		const user: User = { nome: values.username, password: values.password };
		userServices.authenticateUser(user).then((users) => {
			if (!(users.data && users.data.length > 0)) {
				onFinishFailed();
			} else {
				props.onLogin(values);
			}
		})

	};

	const onFinishFailed = () => {
		setHasFailed(true);
	};

	return (
		<div className="login">
			<div className="login-form">
				<div className="login-logo">
					<img src={bigLogo} alt="" />
				</div>
				<div hidden={!loginFailed}>
					<Alert
						style={{ margin: '0 0 1% 0' }}
						message="Erro no login"
						description="Verifique suas credenciais."
						type="warning"
						showIcon
					/>
				</div>
				<Form
					name="basicLogin"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Item
						name="username"
						rules={[{ required: true, message: 'Por favor, digite seu nome de usuário!' }]}>
						<Input
							className="login-form-element"
							placeholder="Nome de Usuário"
							prefix={<img src={loginIcon} alt="" />}
						/>
					</Item>

					<Item
						name="password"
						rules={[{ required: true, message: 'Por favor, digite sua senha!' }]}
					>
						<Input.Password
							className="login-form-element"
							placeholder="Senha"
							prefix={<img className="input-prefix-icons" src={keyIcon} alt="" />}
						/>
					</Item>

					<Item>
						<Button className="login-form-element" type="primary" htmlType="submit">
							Acessar
						</Button>
					</Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
