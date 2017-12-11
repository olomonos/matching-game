
export type Store = {
    gameOver: boolean,
    isPaused: boolean,
    currentCircles: Coords[],
    oddCircle: Coords,
    currentScore: number,
    currentName: string,
    topScore: Score[],
    timeLeft: number
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
