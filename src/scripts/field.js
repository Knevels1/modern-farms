//defined a variable with an empty array->will store all of the plants in that field
let cropsInField = []

export const addPlant = (seedObj) => {
    cropsInField.push(seedObj)

}

export const usePlants = () => {
    const plantingPlants = cropsInField.slice()
}