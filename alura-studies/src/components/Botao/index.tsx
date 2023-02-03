import React, { Children } from 'react';
import styles from './Botao.module.scss';


class Botao extends React.Component{
    render() {
        return(
            <button className={styles.botao}>{children}</button>
        )
    }
}



/*
const Botao = ({children, ...props }) => {
    return (
    <button className={styles.botao}>{children}</button>
    )
}
*/
export default Botao;