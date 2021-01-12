export const sendSimpleError = (code: number, message: string) => ({
  error: {
    code,
    message,
  },
  success: false,
});

export const sendErrorResponse = (error: any) => ({
  error,
  success: false,
});

export const sendSimpleSuccess = (code: number, message: string) => ({
  code,
  message,
  success: true,
});

export const sendSuccessResponse = (data: any) => ({
  data,
  success: true,
});
