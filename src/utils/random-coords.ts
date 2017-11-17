import {Coords} from '../store/types';

export const randomCoords = function(
    fieldWidth: number, 
    fieldHeight: number,
    circleWidth: number,
    circleHeight: number,
    border: number
) : Coords {

    const width: number = fieldWidth - circleWidth;
    const height: number = fieldHeight - circleHeight;
    const widthMin = 0;
    const widthMax = width - border;
    const heightMin = 0;
    const heightMax = height - border;

    function getRndInteger(min: number, max: number) : number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 

    const left = getRndInteger(widthMin, widthMax);
    const top = getRndInteger(heightMin, heightMax);

    return {
        top: top,
        left: left
    };
};