const initialState = {
    tasks: [],
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case '@task/getTasks':
            return {

            };
        case '@task/newTask':
            state.tasks.push(action.payload);
            return {
                tasks: state.tasks,
            };
        default:
            return state;
    }
}

//Action creators
export const newTask = (task) => {
    console.log('New task 1')
    return {
        type: '@task/newTask',
        payload: {
            activity: task.activity,
            completed: false,
            importance: task.importance,
        }
    }
}

export default taskReducer;