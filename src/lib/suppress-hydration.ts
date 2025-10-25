if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  const originalWarn = console.warn;

  console.error = (...args: unknown[]) => {
    const errorMsg = args[0];
    
    // Suppress fdprocessedid warning
    if (
      typeof errorMsg === 'string' &&
      (errorMsg.includes('Extra attributes from the server: fdprocessedid') ||
       errorMsg.includes('Hydration failed'))
    ) {
      return;
    }
    
    originalError.apply(console, args);
  };

  console.warn = (...args: unknown[]) => {
    const warnMsg = args[0];
    
    // Suppress hydration warnings
    if (
      typeof warnMsg === 'string' &&
      warnMsg.includes('fdprocessedid')
    ) {
      return;
    }
    
    originalWarn.apply(console, args);
  };
}