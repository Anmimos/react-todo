import React from 'react';

import './tasks.scss';

export default class Tasks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    
    componentDidMount() {
        const tasks = localStorage.getItem('_tasks').split(' ');
        tasks.splice(tasks.length - 1, 1);

        this.setState({
            tasks
        })
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    formSubmit = (e) => {
        e.preventDefault();
          
        const taskId = this.uuidv4();

        let input = e.target.querySelector('input');

        const taskText = input.value.replace(/  /g, '');
        
        if (taskText !== '' && taskText !== ' ') {

            if (localStorage.getItem('_tasks')) {
                const todos = localStorage.getItem('_tasks');
                localStorage.setItem('_tasks', `${todos}${taskId} `);
            } else {
                localStorage.setItem('_tasks', `${taskId} `);
            }
    
            localStorage.setItem(`task-${taskId}`, JSON.stringify({
                taskText,
                taskId,
                completed: false
            }));

            const tasks = localStorage.getItem('_tasks').split(' ');
            tasks.splice(tasks.length - 1, 1);

            this.setState({
                tasks
            })
            input.value = '';
        }
    }

    waveHover = (e) => {
        if (e.target.matches('button') || e.target.matches('a')) {
            const span = e.target.querySelector('span'); 
            
            span.style.left = e.pageX - e.target.offsetLeft + "px";
            span.style.top = e.pageY - e.target.offsetTop + "px";
        }
    }

    checkedTask = (e) => {
        console.log(this.state.tasks)

        if (e.target.checked) {
            const taskId = e.target.getAttribute('id');

            const task = JSON.parse(localStorage.getItem(`task-${taskId}`));

            localStorage.setItem(`task-${taskId}`, JSON.stringify({
                taskText: task.taskText,
                taskId: taskId,
                completed: true
            }));

            e.target.previousElementSibling.querySelector('p').classList.add('checkVisible');
            e.target.parentNode.parentNode.querySelector('.task-text').classList.add('task-compl');
        } else {
            const taskId = e.target.getAttribute('id');

            const task = JSON.parse(localStorage.getItem(`task-${taskId}`));

            localStorage.setItem(`task-${taskId}`, JSON.stringify({
                taskText: task.taskText,
                taskId: taskId,
                completed: false
            }));

            e.target.previousElementSibling.querySelector('p').classList.remove('checkVisible');
            e.target.parentNode.parentNode.querySelector('.task-text').classList.remove('task-compl');
        }
    }

    deleteTask = (e) => {
        e.preventDefault();
        if (e.target.matches('a')) {
            const taskBtnId = e.target.getAttribute('href');
            localStorage.removeItem(`task-${taskBtnId}`);

            const allTasks = localStorage.getItem('_tasks');
            localStorage.setItem('_tasks', `${allTasks.replace(`${taskBtnId} `, '')}`);
            e.target.parentNode.classList.remove('animate__fadeInDown');
            e.target.parentNode.classList.add('animate__fadeOutDown');
            // setTimeout(() => {
            // e.target.parentNode.remove();
            // },500);
            setTimeout(() => {
                const tasks = localStorage.getItem('_tasks').split(' ');
                tasks.splice(tasks.length - 1, 1);
    
                this.setState({
                    tasks
                })
            },600);
        } else if (e.target.matches('span')) {
            const taskBtnId = e.target.parentNode.getAttribute('href');

            const allTasks = localStorage.getItem('_tasks');
            localStorage.setItem('_tasks', `${allTasks.replace(`${taskBtnId} `, '')}`);
            localStorage.removeItem(`task-${taskBtnId}`);

            e.target.parentNode.parentNode.classList.remove('animate__fadeInDown');
            e.target.parentNode.parentNode.classList.add('animate__fadeOutDown');
            // setTimeout(() => {
            //     e.target.parentNode.parentNode.remove();
            // },500);

            setTimeout(() => {
                const tasks = localStorage.getItem('_tasks').split(' ');
                tasks.splice(tasks.length - 1, 1);
    
                this.setState({
                    tasks
                })
            },600);
        } else if (e.target.matches('text')) {
            const taskBtnId = e.target.parentNode.getAttribute('href');

            const allTasks = localStorage.getItem('_tasks');
            localStorage.setItem('_tasks', `${allTasks.replace(`${taskBtnId} `, '')}`);
            localStorage.removeItem(`task-${taskBtnId}`);

            e.target.parentNode.parentNode.classList.remove('animate__fadeInDown');
            e.target.parentNode.parentNode.classList.add('animate__fadeOutDown');
            // setTimeout(() => {
            //     e.target.parentNode.parentNode.remove();
            //     },500);

                setTimeout(() => {
                    const tasks = localStorage.getItem('_tasks').split(' ');
                    tasks.splice(tasks.length - 1, 1);
        
                    this.setState({
                        tasks
                    })
                },600);
        } else if (e.target.matches('path')) {
            const taskBtnId = e.target.parentNode.parentNode.parentNode.getAttribute('href');

            const allTasks = localStorage.getItem('_tasks');
            localStorage.setItem('_tasks', `${allTasks.replace(`${taskBtnId} `, '')}`);
            localStorage.removeItem(`task-${taskBtnId}`);
            e.target.parentNode.parentNode.parentNode.parentNode.classList.remove('animate__fadeInDown');
            e.target.parentNode.parentNode.parentNode.parentNode.classList.add('animate__fadeOutDown');
            // setTimeout(() => {
            //     e.target.parentNode.parentNode.parentNode.parentNode.remove();
            //     },500);

            setTimeout(() => {
                const tasks = localStorage.getItem('_tasks').split(' ');
                tasks.splice(tasks.length - 1, 1);
    
                this.setState({
                    tasks
                })
            },600);
        } else if (e.target.matches('svg')) {
            const taskBtnId = e.target.parentNode.parentNode.getAttribute('href');

            const allTasks = localStorage.getItem('_tasks');
            localStorage.setItem('_tasks', `${allTasks.replace(`${taskBtnId} `, '')}`);
            localStorage.removeItem(`task-${taskBtnId}`);

            e.target.parentNode.parentNode.parentNode.classList.remove('animate__fadeInDown');
            e.target.parentNode.parentNode.parentNode.classList.add('animate__fadeOutDown');
            // setTimeout(() => {
            //     e.target.parentNode.parentNode.parentNode.remove();
            //     },500);

            setTimeout(() => {
                const tasks = localStorage.getItem('_tasks').split(' ');
                tasks.splice(tasks.length - 1, 1);
    
                this.setState({
                    tasks
                })
            },600);
        }
    }

    renderTask = (id) => {
        const task = JSON.parse(localStorage.getItem(`task-${id}`));

        const taskID = task.taskId,
                checkTask = task.completed;
        
        let classText = "task-text";
        if (checkTask) {
            classText += " task-compl";
        }

        let checkVis = '';
        if (checkTask) {
            checkVis = 'checkVisible';
        } else {
            checkVis = '';
        }

        return (
            <div key={taskID} className='task-card animate__animated animate__fadeInDown'>
                <div className='check'>
                    <label className='labCheck' htmlFor={taskID}>
                        <span></span>

                        <p className={checkVis}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                <path d="M29.6631 3.95914C29.2027 3.48242 28.4431 3.46921 27.9664 3.92961C27.9564 3.93925 27.9465 3.94909 27.9368 3.95914L8.38525 23.5108L2.03365 17.1592C1.55693 16.6988 0.797273 16.712 0.336867 17.1887C-0.112289 17.6538 -0.112289 18.391 0.336867 18.856L7.53686 26.056C8.00549 26.5245 8.76508 26.5245 9.23364 26.056L29.6336 5.65599C30.1103 5.19552 30.1235 4.43586 29.6631 3.95914Z" fill="#000"/>
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                <rect width="30" height="30" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </p>
                    </label>

                    <input type="checkbox" id={taskID} onChange={(e) => this.checkedTask(e)}/>
                </div>

                <div className={classText}>
                    <p>{task.taskText}</p>
                </div>

                <a href={taskID} className="hover-wave" onMouseOver={(e) => this.waveHover(e)} onClick={(e) => this.deleteTask(e)}>
                    <span></span> 
                    <p>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.38599 10.7227V30H24.6141V10.7227H5.38599ZM11.6602 25.5469H9.90239V14.7656H11.6602V25.5469ZM15.879 25.5469H14.1211V14.7656H15.879V25.5469ZM20.0977 25.5469H18.3399V14.7656H20.0977V25.5469Z" fill="black"/>
                            <path d="M19.2381 3.39844V0H10.7619V3.39844H4.20117V8.96484H25.7988V3.39844H19.2381ZM17.4803 3.39844H12.5197V1.75781H17.4803V3.39844Z" fill="black"/>
                            </svg>                                                             
                    </p>
                </a>
            </div>
        )
    }

    render() {
        
        try {
            const elements = this.state.tasks.map((taskIditem) => {
                return this.renderTask(taskIditem);
            });
            return (
                <div className='form-tasks'>
                    <form className='task-form' action='#' onSubmit={(e) => this.formSubmit(e)}>
                        <input type='text' name='taskText'/>
                        <button 
                            type='submit' 
                            className='hover-wave' 
                            onMouseOver={(e) => this.waveHover(e)} 
                            onMouseOut={(e) => this.waveHover(e)}>

                            <span></span>
                            <p>Add</p>
                        </button>
                    </form>

                    <div className="tasks">
                        {elements}
                    </div>
                </div>
            ) 
        } catch (error) {
            return (
                <div className='form-tasks'>
                    <form className='task-form' action='#' onSubmit={(e) => this.formSubmit(e)}>
                        <input type='text' name='taskText'/>
                        <button 
                            type='submit' 
                            className='hover-wave' 
                            onMouseOver={(e) => this.waveHover(e)} 
                            onMouseOut={(e) => this.waveHover(e)}>
    
                            <span></span>
                            <p>Add</p>
                        </button>
                    </form>
    
                    <div className="tasks">
                        
                    </div>
                </div>
            ) 
        }
        
    }
}