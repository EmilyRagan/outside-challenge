function travelTime(from: number, to: number): number
{
    const floorsBetween = Math.abs(from - to);
    return floorsBetween * 10;
}

function getFloors(floors: string): number[]
{
    return floors.split(',').map(f => {
        const floor = Number.parseFloat(f);
        if (Number.isNaN(floor) || !Number.isInteger(floor))
        {
            throw new Error(`${f} is not a valid destination floor`);
        }
        return floor;
    })
}

export function elevator(args: string[]) {
    const startFloor = Number.parseFloat(args[0]);
    if (Number.isNaN(startFloor) || !Number.isInteger(startFloor))
    {
        throw new Error(`provided start floor ${args[0]} is not a valid int`);
    }

    const travelFloors = getFloors(args[1]);

    const allFloors = [startFloor, ...travelFloors];

    let time = 0;
    for (let i = 0; i < allFloors.length - 1; i)
    {
        const current = allFloors[i];
        const next = allFloors[++i];
        const travel = travelTime(current, next);
        time += travel;
    }

    return `${time} ${allFloors.join(',')}`;
}