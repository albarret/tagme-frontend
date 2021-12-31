import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Modal, Progress } from 'antd';
import { clock, imagensPratos } from '../../images';
import React, { useState } from 'react';
import Recipe from './model/Recipe';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import './Receita.scss';

const { confirm } = Modal;

const Receita = (props: any) => {
    const receita = props.receita as Recipe;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [completed, setCompleted] = useState(0);
    const [ingredientesProntos, setIngredientesProntos] = useState(false);
    const [passosProntos, setPassosProntos] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const [finishTime, setFinishTime] = useState(new Date());

    const cabecalhoStyle = {
        backgroundImage: `url(${imagensPratos().imagensGrandes.get(receita.nome)})`,
        backgroundPosition: 'center',
        height: 589 // O tamanho vertical das imagens é padronizado para 589px.
    }

    const onChangeIngredientes = (checkedValues: CheckboxValueType[]) => {
        setIngredientesProntos(checkedValues.length === receita.ingredientes.length);
    };

    const onChangePassos = (checkedValues: CheckboxValueType[]) => {
        const keys = [];
        for (let k in receita.modoPreparo) {
            keys.push(k);
        }
        setPassosProntos(checkedValues.length === keys.length);
        setCompleted(Math.floor((checkedValues.length / keys.length) * 100));
    };

    const getPassos = (): string[] => {
        const passos: string[] = [];
        for (let k in receita.modoPreparo) {
            passos.push(receita.modoPreparo[k]);
        }
        return passos;
    };

    const setStarted = () => {
        setIsStarted(true);
        setStartTime(new Date());
    };

    const setFinished = () => {
        setFinishTime(new Date());
        confirm({
            title: 'OBRIGADO',
            icon: null,
            content: `Prato finalizado com sucesso em ${Math.floor(((finishTime.getTime() - startTime.getTime()) / 1000) / 60)} minutos`,
            onOk() {
                handleOk();
            },
            onCancel() {
                handleOk();
            },
        });
    };

    const handleOk = () => {
        setIsModalVisible(false);
        goBack();
    };

    const goBack = () => {
        props.goBack();
    };

    return (
        <>
            <div style={cabecalhoStyle} className='cabecalho'>
                <div className='cabecalho-top'>
                    <Button className='cabecalho-top-btn' type='dashed' icon={<ArrowLeftOutlined />} onClick={goBack}>Voltar</Button>
                    <Card className='cabecalho-card'>
                        <div>
                            <img src={clock} alt=""></img>
                        </div>
                        <div className='cabecalho-card-text'>
                            <span className='cabecalho-card-description'>Tempo de preparo</span>
                            <span className='cabecalho-card-time'>{receita.tempoPreparo}</span>
                        </div>
                    </Card>
                </div>
                <div className='cabecalho-texto'>
                    <p className='cabecalho-texto-nome'>{receita.nome}</p>
                    <p>{receita.descricao}</p>
                </div>
            </div>
            <div className='ingredientes'>
                <h3>Ingredientes</h3>
                <Checkbox.Group options={receita.ingredientes} onChange={onChangeIngredientes} />
            </div>
            <div className='passos-preparo'>
                <h3>Passos</h3>
                <Checkbox.Group disabled={!isStarted} options={getPassos()} onChange={onChangePassos} />
            </div>
            <div className='footer'>
                <div style={{ width: 200 }}>
                    <span>{`Status ${completed}% pronto`}</span>
                    <Progress percent={completed} strokeColor={'orange'} showInfo={false} />
                </div>
                {
                    !isStarted ? <Button className='footer-btn' size='large' disabled={!ingredientesProntos} onClick={setStarted}>Iniciar preparação</Button>
                        : <Button className='footer-btn' size='large' disabled={!(ingredientesProntos && passosProntos)} onClick={setFinished}>Finalizar</Button>
                }
            </div>
        </>
    );
}

export default Receita;