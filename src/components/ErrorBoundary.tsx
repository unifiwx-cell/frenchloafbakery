import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('French Loaf Web Application Caught Error:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F3F7FA] text-[#121D28] flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#121D28]/10 shadow-xl text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#E1EDF5] flex items-center justify-center text-[#2A6588]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="font-serif-editorial text-2xl font-bold mb-2 text-[#121D28]">
              French Loaf Bakery & Cafe
            </h1>
            <p className="text-sm text-[#526B7D] mb-6">
              Something went wrong while rendering the view. Please refresh or try again.
            </p>
            {this.state.error && (
              <pre className="text-left text-xs bg-[#F3F7FA] p-3 rounded-xl overflow-x-auto text-red-600 mb-6 font-mono">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReload}
              className="w-full py-3 px-6 rounded-full bg-[#121D28] text-[#F3F7FA] font-medium text-sm hover:bg-[#2A6588] transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
