import React, { useEffect, useRef, useState } from "react";
import { List, Input, Button } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { faBook, faScroll } from "@fortawesome/free-solid-svg-icons";
import './MainPage.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import recipeServices from "../services/recipiesServices";
import { headerMiniLogo, lookingIcon, imagensPratos } from '../../images';
import Receita from "../receita/Receita";
import Recipe from "../receita/model/Recipe";

const ListHeader = (props: any) => {

	const onClickPedidosHandler = () => {
		console.log("Essa função ainda não foi implementada");
	};

	const onClickReceitasHandler = () => {
		console.log("Essa função ainda não foi implementada");
	};

	const onClickSairHandler = () => {
		props.onLogout();
	};

	const filterRecipies = (event: any) => {
		props.setBuscador(event.target.value);
	}

	return (
		<div className='header-content'>
			<div className="header-logo-mini">
				<img src={headerMiniLogo} alt='' />
			</div>
			<div className="header-recipe-filter">
				<Input
					suffix={<img src={lookingIcon} alt="" />}
					placeholder="Buscar receita..."
					onPressEnter={filterRecipies}
				/>
			</div>
			<div className="header-buttons-deck">
				<div className="header-button" onClick={onClickPedidosHandler}>
					<FontAwesomeIcon icon={faScroll} />
					<span>Pedidos</span>
				</div>
				<div className="header-button" onClick={onClickReceitasHandler}>
					<FontAwesomeIcon icon={faBook} />
					<span>Receitas</span>
				</div>
				<div className="header-button" onClick={onClickSairHandler}>
					<UserOutlined />
					<span>Sair</span>
				</div>
			</div>
		</div>
	);
}

const MainPage = (props: any) => {
	const [data, setData] = useState([]);
	const [recipe, setRecipe] = useState();
	const [buscador, setBuscador] = useState('');
	const recipiesDisplayed = useRef<Array<Recipe>>();
	const recipiesLoaded = useRef<Array<Recipe>>();

	const goBack = () => {
		setRecipe(undefined);
	}

	useEffect(() => {
		if (!recipiesLoaded.current || recipiesLoaded.current.length === 0) {
			recipeServices.findAllRecipies().then((receivedData) => {
				recipiesLoaded.current = receivedData.data;
				recipiesDisplayed.current = receivedData.data;
				setData(recipiesDisplayed.current as any);
			})
		} else {
			if (buscador.length > 0 && recipiesLoaded.current) {
				recipiesDisplayed.current = recipiesLoaded.current.filter((receita: Recipe) => {
					return receita.nome.includes(buscador);
				});
				setData(recipiesDisplayed.current as any);
			} else {
				recipiesDisplayed.current = recipiesLoaded.current;
				setData(recipiesDisplayed.current as any);
			}
		}
	}, [buscador]);

	const mountList = (item: any) => {
		const verReceita = () => {
			setRecipe(item);
		}
		return (
			<List.Item>
				<div className="card-wrapper">
					<div className="card-content">
						<div className="card-image">
							<img src={imagensPratos().imagensPequenas.get(item.nome)} alt="" />
						</div>
						<div className="card-text">
							<span className="card-text-name">{item.nome}</span>
							<span className="card-text-description">{item.descricao}</span>
						</div>
					</div>
					<div className="btn-wrapper">
						<Button className="btn" onClick={verReceita}>Ver<br />Receita</Button>
					</div>
				</div>
			</List.Item>
		);
	}

	if (recipe) {
		return <Receita receita={recipe} goBack={goBack} />
	}

	return (
		<List
			header={<ListHeader setBuscador={setBuscador} onLogout={props.onLogout} />}
			grid={{ gutter: 16, column: 1 }}
			dataSource={data}
			renderItem={mountList}
		/>
	);
}

export default MainPage;