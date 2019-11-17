

export const delay = (callback, delay) => {
    setTimeout(() => {
        callback();
    }, delay);
}