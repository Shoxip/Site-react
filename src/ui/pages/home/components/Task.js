import "./Task.css"
const Task = ({ task }) => {
    let isItOwner = false;

    if (task.author === 'Roudy') {
        isItOwner = true
    }

    return (
        <div className="task">
            <div className="author" style={isItOwner? {color: 'skyblue'} : {color: 'white'}}>{task.author}:</div>
            
                <div id='ex1' className="before">
                    <div className="text-cont">
                        <h3>{task.text}</h3>
                    </div>
                </div>

            <div className="postDate">{task.day}</div>
        </div>
    )
}

export default Task