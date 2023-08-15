import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
const css = { backgroundColor: hexToRgba(props.cor, '0.6'), backgroundImage: 'url(/images/fundo.png)' }

    return (
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <input onChange={event => props.mudarCor(event.target.value, props.id)} value={props.cor} type='color' className='input-cor' />
            <h3 style={{borderColor : props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => {
                    return <Colaborador 
                        corDeFundo={props.cor} 
                        key={indice} 
                        nome={colaborador.nome}
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        favorito={colaborador.favorito} 
                        aoFavoritar={props.aoFavoritar}
                        aoDeletar={props.aoDeletar} 
                        id={colaborador.id}
                    />
                })}
            </div>
        </section>
    )
}

export default Time