import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
    <h1 className="font-Kaushan text-5xl text-primary">404</h1>
    <p className="text-zinc-500">We couldn't find that page.</p>
    <Link
      to="/"
      className="rounded bg-primary px-6 py-2 font-semibold text-white hover:bg-primary-dark"
    >
      Back to home
    </Link>
  </div>
);

export default NotFound;
