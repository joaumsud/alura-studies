import React from 'react';
import styles from './Botao.module.scss';


const Botao = (props: any) =>{
 return (
    <button className={styles.botao}> {props.titulo}</button>
 )
}

export default Botao;