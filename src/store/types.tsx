
export type Store = {
    gameOver: boolean,
    currentCircles: Coords[],
    currentScore: number,
    currentName: string,
    topScore: Score[] | null
}

export interface Score {
    id: string,
    name: string,
    points: number
}

export type NewTopScore = Pick<Score, 'name' | 'points'>

export type Coords = {
    top: number,
    left: number
}
