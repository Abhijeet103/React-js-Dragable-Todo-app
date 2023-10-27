const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'solve 3 Question Dp' },
    'task-2': { id: 'task-2', content: 'learn springboot' },
    'task-3': { id: 'task-3', content: 'build react app' },
    'task-4': { id: 'task-4', content: 'unit testing ' },
    'task-5': { id: 'task-5', content: 'solve 3 leetcode Question ' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2']
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3']
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-4']
    },

  }
}

export default initialData
