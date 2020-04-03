const todoList = () =>
  fetch("https://wincacademydatabase.firebaseio.com/sarah/tasks.json")
    .then(response => {
      return response.json();
    })
    .then(result => {
      console.log(result);
      let tasks = Object.keys(result).map(key => ({
        id: key,
        description: result[key].description,
        done: result[key].done
      }));
      console.log("After the tasks array", tasks);
      return tasks;
    });

