import React from 'react'

interface AnimalsProps {
    pet: any,
}

export const Animals: React.FC<AnimalsProps> = ({ pet }) => {
    // console.log(pet)
    return (
        <div>
            <h2>Animal Details</h2>
            {
                pet.map((pets: any) => (
                    <div>
                        <h2>{pets.id}</h2>
                        <h1>{pets.name}</h1>
                        <p>{pets.lifespan}</p>
                    </div>
                ))
            }
        </div>
    )
}
