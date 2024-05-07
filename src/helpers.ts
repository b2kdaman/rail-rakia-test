import { ErrorMessage } from './types';

export function isErrorWithMessage(
  error: unknown,
): error is ErrorMessage {
  return (
    typeof error === 'object' && error != null && 'data' in error
  )
}
