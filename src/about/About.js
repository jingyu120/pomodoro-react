import "./About.css";
export default function About() {
  return (
    <>
      <div className="todo-container">
        <h1>Todo List</h1>
        <p>
          This is a todo list app that allows you to add todo items to your todo
          list.
        </p>
        <p>
          The app allows you to mark item as complete and then the button for
          complete for the corresponding item will disappear. Delete will delete
          the item from the todo list.
        </p>
        <p>
          Using Redux, the data is persisted for the lifetime of the browser
          session. Changing from one component to another as well as refreshing
          the page will not erase current todo list items.
        </p>
      </div>
      <div className="timer-container">
        <h1>Pomodoro Timer: </h1>
        <p>
          The pomodoro timer implements the default pomodoro focus strategy with
          focus time of 25 minutes and rest time of 5 minutes.{" "}
        </p>
        <p>
          This app allows you to start and pause the timer. By presing the reset
          button, timer will reset and pause at 25 minutes. When timer hits 0,
          then it will either go into break or another focus session depending
          on the status of the previous session.
        </p>
      </div>
    </>
  );
}
