
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import MainContainer from './Components/MainContainer/MainContainer'
import NavBar from './Components/NavBar/NavBar'
import { toast, ToastContainer } from 'react-toastify';
import Footer from './Components/Footer/Footer'

const fetchCard = async () => {
  const res = await fetch('./Card.json');
  return res.json();
}

const cardPromise = fetchCard();
// console.log(cardPromise)

function App() {

  const [task, setTask] = useState([]);
  const [taskResolved, setResolveTask] = useState([]);
  const handleTask = (newTask) => {
    setTask([...task, newTask]);
    toast(`Task No.${newTask.id} is Assinged!!`);
  }

  const resolveTask = (completeTask) => {
    setTask(task.filter(eachTask => eachTask.id !== completeTask.id));
    toast(`Task No.${completeTask.id} is Completed!!`);
    setResolveTask([...taskResolved, completeTask]);
  }
  // console.log(task);

  return (
    <>
      <NavBar></NavBar>
      <Banner task={task} taskResolved={taskResolved}></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <MainContainer cardPromise={cardPromise} handleTask={handleTask} resolveTask={resolveTask} task={task} taskResolved={taskResolved}></MainContainer>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
