<script>
    let task = "";
    // @ts-ignore
    let todos = JSON.parse(localStorage.getItem("1")) || [];
    let filter = "all";
    if (localStorage.length === 0) {
      localStorage.setItem("1", "[]");
    }
    function addTask() {
      todos = [{ task: task, status: "pending" }, ...todos];
      task = "";
      let mint = JSON.stringify(todos);
      localStorage.setItem("1", mint);
    }
    /**
     * @param {number} i
     */
    function markcomplete(i) {
      todos[i].status = "completed";
      todos = [...todos];
    }
    // @ts-ignore
    function removeTask(i) {
      todos.splice(i, 1);
      todos = [...todos];
    }
  </script>
  
  <div class="container">
    <div class="todo">
      <div class="filters">
        <button
          class={filter == "all" ? "active" : ""}
          on:click={() => {
            filter = "all";
          }}>All</button
        >
        <button
          class={filter == "completed" ? "active" : ""}
          on:click={() => {
            filter = "completed";
          }}>Completed</button
        >
        <button
          class={filter == "incompleted" ? "active" : ""}
          on:click={() => {
            filter = "incompleted";
          }}>InCompleted</button
        >
      </div>
      <div class="form">
        <input type="text" bind:value={task} />
        <button on:click={addTask}>ADD</button>
      </div>
      <div class="tasks">
        {#each todos as todo, i}
          {#if filter == "all"}
            <div class="task">
              <span class="color">{todo.task}</span>
              <button
                class="btn {todo.status == 'completed' ? 'active' : ''}}"
                on:click={() => {
                  markcomplete(i);
                }}>&#10004</button
              >
              <button class="btn"
                on:click={() => {
                  removeTask(i);
                }}>&#10006</button
              >
            </div>
          {:else if filter == "completed"}
            {#if todo.status == "completed"}
              <div class="task">
                <span class="color">{todo.task}</span>
                <button
                  on:click={() => {
                    removeTask(i);
                  }}>&#10006</button
                >
              </div>
            {/if}
          {:else if filter == "incompleted"}
            {#if todo.status == "pending"}
              <div class="task">
                <span class="color">{todo.task}</span>
                <button
                  class="{todo.status == 'completed' ? 'active' : ''}}"
                  on:click={() => {
                    markcomplete(i);
                  }}>&#10004</button
                >
              </div>
            {/if}
          {/if}
        {/each}
      </div>
    </div>
  </div>

  <style>
    .container {
        border: 5px solid #4608ad;
        border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      margin-top: 50px;
      background: #221f1f;
    }
    .color {
      font-size: 1.3rem;
      color: rgb(234, 233, 233);
      padding-right: 5px;
    }
    .filters {
        display: flex;
        justify-content: center;
      margin: 20px 0;
    }
    .filters button {
      margin: 0 10px;
      cursor: pointer;
      color: white;
      padding: 10px 20px;
      border: 1px solid #4608ad;
      background: #4608ad;
      border-radius: 10px;
    }
    .form {
      margin: 10px;
    }
    .form input {
      width: 250px;
      height: 40px;
      border: 2px solid rgb(62, 158, 255);
      border-radius: 10px;
      padding: 0 10px;
      font-family: sans-serif;
      margin: 0px 5px;
    }
    .form button{
        width: 100px;
        height: 40px;
        border: 2px solid rgb(62, 158, 255);
        border-radius: 10px;
        padding: 0 10px;
        font-family: sans-serif;
        margin: 0px 5px;
        background: #4608ad;
        color: white;
    }
    .task {
      width: fit-content;
      margin: 8px 0;
      border: 1px solid #ccc;
      padding: 10px 15px;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    .task:hover {
      transform: scale(1.04);
      /* background-color: #ffae33; */
      transition: all 0.3s ease;
      cursor: pointer;
      border-radius: 5px;
      border: 2px solid #4608ad;
      box-shadow:  5px 5px #4608ad;
    }
    .tasks {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
    }
    .btn{
        width: 40px;
        height: 40px;
        border: 2px solid rgb(62, 158, 255);
        border-radius: 10px;
        padding: 0 10px;
        font-family: sans-serif;
        margin: 0px 5px;
        background: #4608ad;
        color: white;
    }
    @media screen and (max-width: 768px) {
      .container {
        border: none;
        background: none;
        padding: 2px 2px;
        flex-direction: column;
      }
      .filters {
        flex-direction: column;
        font-size: 1rem;
      }
      .filters button {
        padding: 2px 2px;
        margin: 10px 0;
      }
      .form input{ 
        width: 160px;
        margin: 10px 0;
        padding: 2px 2px;
      }
      .task{
            margin: 5px 0;
            padding: 5px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
      }
      .btn{
            width: 30px;
            height: 30px;
            border: 2px solid rgb(62, 158, 255);
            border-radius: 10px;
            padding: 0 10px;
            font-family: sans-serif;
            margin: 0px 5px;
            background: #4608ad;
            color: white;
            text-align: center;
            display: flex;
            justify-content: center;
      }
    }

  </style>