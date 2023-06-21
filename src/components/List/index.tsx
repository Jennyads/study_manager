import React from  'react';
import style from './Lista.module.scss';
import Item from './Item';

function List(){
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'JavaScript',
        time: '01:00:00'
    }, {
        task: 'TypeScript',
        time: '03:00:00'
    }]

    return(
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {/* percorrer o array e retornar um html */}
                {tasks.map((item, index) => (
                    <Item
                    key={index}
                    {...item} //item vem de um objeto, assim desestrutura e usa todos os atributos, conseguimos utilizar todos os atributos que existem dentro daquele objeto como prop para esse componente. Isso é muito bom, porque se tiver muitas propriedades dentro daquele objeto, não precisamos ficar escrevendo uma por uma. Basta desestruturar dentro do componente e ele já consegue nos mostrar tudo.

                    // task={item.task}
                    // time={item.task}
                    />
                    
                ))}
            </ul>

        </aside>
    )
}

export default List;