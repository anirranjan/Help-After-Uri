import React from 'react';
import './App.css';

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
    >
      {task.text}
      <div>
        <button onClick={() => completeTask(index)}>Complete</button>
        <button style={{ marginLeft: '10px' }} onClick={() => removeTask(index)}>x</button>
      </div>
    </div>
  );
};

function TaskForm({ addTask }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new task"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [points, setPoints] = React.useState(0);
  const [tasks, setTasks] = React.useState([
    {
      text: "Cook a meal for a neighbor without power",
      isCompleted: false
    },
    {
      text: "Buy a heater for someone in need",
      isCompleted: false
    },
    {
      text: "Donate school supplies to schools that were damaged due to the storm",
      isCompleted: false
    }
  ]);

  const addTask = text => {
    const newTasks = [...tasks, { text }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = true;
    newTasks.splice(index, 1);
    setTasks(newTasks);
    setPoints(points + 30);
  }

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const canBuyStarbucks = () => {
    if (points < 20) {
      alert("Not enough points for Starbucks Gift Card");
    } else {
      setPoints(points - 20);
      alert("Successfully redeemed Starbucks Gift Card");
    }
  }

  const canBuyAmazon = () => {
    if (points < 25) {
      alert("Not enough points for Amazon Gift Card");
    } else {
      setPoints(points - 25);
      alert("Successfully redeemed Amazon Gift Card");
    }
  }

  const canBuyRedCross = () => {
    if (points < 50) {
      alert("Not enough points for Red Cross Donation");
    } else {
      setPoints(points - 50);
      alert("Successfully redeemed Red Cross Donation");
    }
  }

  const canBuyCarePackage = () => {
    if (points < 75) {
      alert("Not enough points for Care Package Donation");
    } else {
      setPoints(points - 75);
      alert("Successfully redeemed Care Package Donation");
    }
  }

  const canBuyNorthTexasFoodBank = () => {
    if (points < 100) {
      alert("Not enough points for North Texas Food Bank Donation");
    } else {
      setPoints(points - 100);
      alert("Successfully redeemed North Texas Food Bank Donation");
    }
  }

  return (
    <div className="app">
      <div className="introduction">
        <h1>Help After Uri</h1>
        <p>Help After Uri, named after the winter storm that affected millions of Texans in February 2021, is an initiative to help the Texas community bounce back from this unexpected storm. Complete tasks needed by those in the community to earn points and redeem them for various prizes.</p>
        <h2>Task List</h2>
        <p>Complete tasks needed by those affected by the storm and add tasks that you need help with as well. We are all in this together!</p>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}
        <TaskForm addTask={addTask} />
      </div>
      <div className="prizes">
        <h3>Points: {points}</h3>
        <h2>Prizes</h2>
        <p>Redeem your points for prizes, well deserved for serving your community!</p>
        <h3>$20 Starbucks Gift Card</h3>
        <button onClick={() => canBuyStarbucks()}>20 points</button>
        <h3>$25 Amazon Gift Card</h3>
        <button onClick={() => canBuyAmazon()}>25 points</button>
        <h3>$50 Donation to Red Cross</h3>
        <button onClick={() => canBuyRedCross()}>50 points </button>
        <h3>Food and Clothing Care Package Donation</h3>
        <button onClick={() => canBuyCarePackage()}>75 points</button>
        <h3>$100 Donation to North Texas Food Bank</h3>
        <button onClick={() => canBuyNorthTexasFoodBank()}>100 points</button>
        <p>For demonstration purposes only</p>
      </div>
      <div>
        <div className="credits">
          <h2>Credits</h2>
          <p>Created by Nirranjan Akilan: <a href="https://github.com/anirranjan">GitHub</a> </p>
          <p>Snowflake favicon from favicon.io</p>
        </div>
      </div>
    </div>
  );
}

export default App;
