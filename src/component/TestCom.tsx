import React from "react";

interface TestComProps {
    testprop: any
}

export const TestCom: React.FC<TestComProps> = ({testprop}) => {

const heroPage = testprop.filter(ele => ele._type == 'hero')

console.log({heroPage})

    return <div>
        <h2>Test Component</h2>
    </div>
} 