// const tasks = [
//   {
//     id: 1,
//     text: "Visit Doctor",
//     day: "5.10.21",
//     reminder: true,
//   },
//   {
//     id: 2,
//     text: "Study",
//     day: "daily",
//     reminder: false,
//   },
// ];
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;

//States are immutable, so you need to recreate it instead of doing a tasks.push(which is wrong)
//   setTasks([
//     ...tasks,
//     {
//       id: 3,
//       text: "Be Happy",
//       day: "Everyday",
//       reminder: true,
//     },
//   ]);
