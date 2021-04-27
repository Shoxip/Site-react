import "./home.css"
import Task from "./components/Task"
import {  useState  } from 'react'

function Home() {
    const [tasks, setTasks] = useState([    
        {
        id: 1,
        text: `What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
        day: `Apr 23th at 20:00`,
        author: `Roudy`,
    },
    {
        id: 2,
        text: `Тут я что-то добавил, и это был NavBar. В первый раз его делать довольно сложно .-.`,
        day: `Apr 23th at 21:00`,
        author: `Roudy`,
    },
    {
        id: 3,
        text: `Эта строчка была взята из Json формата. Теперь данные идут из базы данных. Это довольно просто :)`,
        day: 'Apr 23th at 21:21',
        author: `Roudy`,
    },
    {
        id: 4,
        text: `Возможно, в будущем сюда можно будет писать разным пользователям.`,
        day: 'Apr 24th at 08:34',
        author: `RandomGuy`
    },
    {
        id: 5,
        text: `Спасибо DVK и Krvvko за помощь. Благодаря этим людям я не спал всю ночь <3 ... Но это определённо пошло мне на пользу =)`,
        day: 'Apr 24th at 08:38',
        author: `Roudy`
    },
    {
        id: 6,
        text: `I'm Done => `,
        day: 'Apr 24th at 10:25',
        author: `Roudy`
    },
    {
        id: 6,
        text: `Так, ребятульки. Что это за сайт и зачем это нужно? 
        Во первых, если вы задали этот вопрос знайте - мне грустно. Но ближе к делу.
        Этот сайт - просто моя визитка. Он нужен для того чтобы показать что я могу
        сделать что то на js -> React. Тут вы можете прочитать мои мысли на разные
        темы потому что я обычно не делюсь ими в соц. сетях, для удобства
        вы можете зайти сюда с телефона т.к я изначально пользовался правилом
        Mobile First. А ещё ознакомиться с моим резюме или проектами в которых 
        я принимал участие... Чуть позже. Да-да, сайт ещё не доработан. По большей
        части это связанно с тем что в FrontEnd разработке я нахожусь от силы недели
        2. Тем не менее, я уверен что в скором времени смогу всё сделать.
        Тут будет чат, блог с моими мыслями и Очень Много Анимаций
        в стиле консольных форумов. Буду благодарен любому фидбэку!`,
        day: `Apr 26th at 15:34`,
        author: `Roudy`
    }
    ])

    return(
        <div className="home">
            {tasks.map((task) => (
                <Task key ={task.id} task = {task} />
            )).reverse()}
        </div>
    );
}
export default Home;