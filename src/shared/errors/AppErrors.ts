export class AppErrors extends Error {
    title: string;
    message: string;
    statusCode: number;
    constructor(title: string, message: string, statusCode: number) {
        super(title);
        this.title = title;
        this.message = message;
        this.statusCode = statusCode;
    }
}

export class BadRequest extends AppErrors {
    constructor(message: string) {
        super("Bad Request", message, 400);
    }
}

export class Unauthorized extends AppErrors {
    constructor(message: string) {
        super("Unauthorized", message, 401);
    }
}

export class Forbbiden extends AppErrors {
    constructor(message: string) {
        super("Forbbiden", message, 403);
    }
}

export class NotFound extends AppErrors {
    constructor(message: string) {
        super("Not Found", message, 404);
    }
}

export class Conflict extends AppErrors {
    constructor(message: string) {
        super("Conflict", message, 409);
    }
}

export class ServerError extends AppErrors {
    constructor(message: string) {
        super("Server Error", message, 500);
    }
}

export class FailedDependency extends AppErrors {
    constructor(message: string) {
        super("Failed Dependency", message, 424);
    }
}