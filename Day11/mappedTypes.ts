// Original Interface
interface Car {
    make: string;
    model: string;
}

// Mapped Type with Key Remapping
type ApiResponse<T> = {
    [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

// Using the Mapped Type
type CarApiResponse = ApiResponse<Car>;

// Example Object
const carData: CarApiResponse = {
    DATA_MAKE: "Toyota",
    DATA_MODEL: "Fortuner"
};

console.log(carData);