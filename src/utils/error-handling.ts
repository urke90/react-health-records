import type { FirestoreErrorCode } from 'firebase/firestore';

interface IErrorHandler {
  getFirestoreErrorMessage(code: FirestoreErrorCode): string;
}

class ErrorHandler implements IErrorHandler {
  private readonly firestoreErrorMessages: { [key: string]: string };

  constructor() {
    this.firestoreErrorMessages = {
      cancelled: 'The operation was cancelled. Please try again if this was unintentional.',
      unknown: 'An unknown error occurred. Please refresh the page or try again later.',
      'invalid-argument':
        'An invalid argument was provided. Please check your input and try again.',
      'deadline-exceeded': 'The operation took too long to complete. Please try again later.',
      'not-found':
        'The requested document could not be found. It might have been removed or does not exist.',
      'already-exists':
        'A document with the same identifier already exists. Please use a unique identifier.',
      'permission-denied':
        'You do not have permission to perform this action. Contact the administrator if you think this is a mistake.',
      'resource-exhausted': 'The system resources have been exhausted. Please try again later.',
      'failed-precondition':
        'The operation could not be completed due to an unmet precondition. Please check the requirements and try again.',
      aborted: 'The operation was aborted, likely due to a conflicting request. Please try again.',
      'out-of-range':
        'The operation was attempted outside the valid range. Please check your input and try again.',
      unimplemented:
        'The operation is not supported or has not been implemented yet. Please contact support for assistance.',
      internal: 'An internal server error occurred. Please try again later or report this issue.',
      unavailable:
        'The service is currently unavailable. Please check your connection or try again later.',
      'data-loss': 'Critical data loss occurred. Please contact support immediately.',
      unauthenticated: 'You are not authenticated. Please log in and try again.',
      default: 'An unknown error occurred.',
    };
  }

  public getFirestoreErrorMessage(code: FirestoreErrorCode) {
    return this.firestoreErrorMessages[code] || this.firestoreErrorMessages['default'];
  }

  public getAuthErrorMessage(code: FirestoreErrorCode) {
    return this.firestoreErrorMessages[code];
  }
}

export const errorHandler = new ErrorHandler();
