
export type Store = {
    continue: boolean,
    currentScore: Score,
    topScore: Score[] | null
}

export interface Score {
    id: string,
    name: string,
    points: number | null
}

export type Coords = {
    top: number,
    left: number
}
// export interface EditableTodo extends Todo {
//     changes?: TodoChanges
// }

// export type TodoChanges = Partial<Pick<Todo, 'name' | 'priority' | 'complete' | 'description'>>

// export type NewTodo = Pick<Todo, 'name' | 'priority' | 'complete' | 'description'>

// export type Todos = EditableTodo[] 

// export type EditTodo = Todo | null

// export type Sort = {
//     direction: 'ASC' | 'DESC';
//     field: 'name' | 'complete' | 'priority'
// }
