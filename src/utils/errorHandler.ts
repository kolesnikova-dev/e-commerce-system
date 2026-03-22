class UnknownError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'UnknownError';
        Object.setPrototypeOf(this, UnknownError.prototype);
    }
}

class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NetworkError';
        Object.setPrototypeOf(this, NetworkError.prototype);
    }
}

export const errorHandler = {
    UnknownError,
    NetworkError
};