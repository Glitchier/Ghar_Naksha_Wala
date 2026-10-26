import { Component, type ReactNode } from "react";

type State = { failed: boolean };

class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-semibold">Something went wrong</h1>
        <p className="text-sm text-zinc-500">
          The page failed to load. Please check your connection and retry.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded bg-primary px-6 py-2 font-semibold text-white hover:bg-primary-dark"
        >
          Reload
        </button>
      </div>
    );
  }
}

export default ErrorBoundary;
