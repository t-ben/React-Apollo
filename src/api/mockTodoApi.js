import delay from './delay';

class TodoApi {
    static addTodo(todo) {
        todo = {...todo};
        console.log( 'mockTodoApi-addTodo starts');
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log( 'mockTodoApi-addTodo ends');
                resolve(todo);
            }, delay);
        });

    }
}

export default TodoApi;