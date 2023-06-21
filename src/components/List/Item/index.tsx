import style from '../Lista.module.scss'


//export default function Item(tarefa, tempo: {tarefa: string, tempo: string}).  //alternativa para desestruturar a props
export default function Item(props:{ task:string, time:string }) {
    const {task, time} = props;
    return (
        <li className={style.item}>
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
        </li>
    )
}