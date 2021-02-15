/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

export const HttpErrorCodes = {
  BAD_REQUEST: 400,
  INTERNAL_SERVER: 500,
};

/**
 * @class ApplicationError
 */
export class ApplicationError extends Error {
  /**
   * @param {*} code
   * @param {*} message
   * @param {*} data
   */
  constructor(code, message, data) {
    super();
    if (code != null) {
      this.code = code;
    }
    if (message != null) {
      this.message = message;
    }
    if (data != null) {
      this.data = data;
    }
  }
}

/**
 * @class BadRequest
 */
export class BadRequest extends ApplicationError {
  /**
   * @param {*} message
   * @param {*} data
   */
  constructor(message, data) {
    super(HttpErrorCodes.BAD_REQUEST, message || 'Bad request', data);
  }
}

export const apiErrorHandler = (err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res.status(err.code).json({
      message: err.message, status: 'error', data: err.data
    });
  }

  if (err instanceof SyntaxError && (err).status === 400 && 'body' in err) {
    return res.status(HttpErrorCodes.BAD_REQUEST).json({
      message: 'Invalid JSON payload passed.',
      status: 'error',
      data: null,
    });
  }

  res.status(HttpErrorCodes.INTERNAL_SERVER).json({
    message: err.message, status: 'error', data: null
  });
};