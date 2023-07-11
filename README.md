<h3>React: escrevendo com typescript e construindo uma aplicação de gerenciamento de estudos</h3>

 O comando create-react-app projeto --template typescript cria o projeto com a linguagem TypeScript, o comando cd projeto entra na pasta desse projeto criado e o comando npm start roda o projeto.
```
npx create-react-app projeto --template typescript
--use-npm | cd projeto | npm start

```
Nesse caso, utiliza-se um método de array para renderizar essas tarefas, colocando cada tarefa desse array dentro de um p.
```
const tarefas = [{ tarefa: 'React' }, { tarefa: 'Javascript' }, { tarefa: 'Typescript '}];
tarefas.map(item => <p> {item.tarefa} </p>)
```
O map retorna um outro array, e como não foi utilizada chaves, ele está retornando um array de JSX, isso retorna os itens como esperado!
