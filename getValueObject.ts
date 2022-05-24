// Utility function to get value from a nested object or array
function getValueObject(object: IObject, path: string): unknown {
    const splitPath = path.split(".");
    const key = splitPath.shift() as string;

    if (object[key] !== undefined) {
        const value = object[key];

        if (splitPath.length === 0) {
            return value;
        }

        const newPath = splitPath.join(".");
        return getValueObject(value, newPath);
    }

    return null;
}

// Typing
type propertyOne = string[] | number[];

interface propertyTwo {
    valueTwo: string | number;
}

interface IObject {
    propertyOne: propertyOne;
    propertyTwo: propertyTwo;
}

// Object example
const object = {
    propertyOne: ["valueOne"],
    propertyTwo: {
        valueTwo: "valueTwo",
    },
};

// Get value from object
const valueOne = getValueObject(object, "propertyOne.0");
const valueTwo = getValueObject(object, "propertyTwo.valueTwo");

// Log
console.table({
    valueOne,
    valueTwo,
});
