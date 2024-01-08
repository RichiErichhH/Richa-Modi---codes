import React from "react";
    const AllData=[
        {
            src:"https://www.ntuclearninghub.com/documents/39367/4216797/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476/",
            cato:"Python"
        },
        {
            src:"https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124",
            cato:"React"
        },
        {
            src:"https://miro.medium.com/v2/resize:fit:1358/0*Znj-04sinj7rfY3i",
            cato:"Flutter"
        }

    ]

export default AllData;

// unction Todo() {
    //     const [todos, setTodos] = useState([]);
    //     const [newTodo, setNewTodo] = useState('');
      
    //     const handleAddTodo = () => {
    //       if (newTodo) {
    //         setTodos([...todos, newTodo]);
    //         setNewTodo('');
    //       }
    //     };
      
    //     const handleRemoveTodo = (index) => {
    //       const updatedTodos = todos.filter((_, i) => i !== index);
    //       setTodos(updatedTodos);
    //     };
      
    //     return (
    //       <div>
    //         <h1>Todo App</h1>
    //         <input
    //           type="text"
    //           placeholder="Add a new todo..."
    //           value={newTodo}
    //           onChange={(e) => setNewTodo(e.target.value)}
    //         />
    //         <button onClick={handleAddTodo}>Add</button>
    //         <ul>
    //           {todos.map((todo, index) => (
    //             <li key={index}>
    //               {todo}
    //               <button onClick={() => handleRemoveTodo(index)}>Remove</button>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     );
    //   }
      
    //   export default Todo;