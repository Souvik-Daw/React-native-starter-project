export async function toast(message) {
    try {
        console.log(message)
        return true;
    } catch (error) {
        throw new Error(error);
    }
}