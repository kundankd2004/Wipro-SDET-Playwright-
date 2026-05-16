// Generic Higher-Order Function
function safeExecute<T, Args extends any[]>(
    asyncFunction: (...args: Args) => Promise<T>
) {
    return async (...args: Args): Promise<T | null> => {
        try {
            return await asyncFunction(...args);
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };
}

// Example Async Function
async function fetchUser(id: number): Promise<string> {
    if (id === 0) {
        throw new Error("User not found");
    }

    return `User ID: ${id}`;
}

// Wrapped Function
const safeFetchUser = safeExecute(fetchUser);

// Testing
(async () => {
    const result1 = await safeFetchUser(1);
    console.log(result1);

    const result2 = await safeFetchUser(0);
    console.log(result2);
})();