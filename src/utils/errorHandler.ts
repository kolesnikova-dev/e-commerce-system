class DataError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DataError';
        Object.setPrototypeOf(this, DataError.prototype);
    }
}

class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NetworkError';
        Object.setPrototypeOf(this, NetworkError.prototype);
    }
}

class TimeOutError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'TimeOutError';
        Object.setPrototypeOf(this, TimeOutError.prototype);
    }
}

class ServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ServerError';
        Object.setPrototypeOf(this, ServerError.prototype);
    }
}

export const errorHandler = {
    DataError,
    NetworkError,
    TimeOutError,
    ServerError
};