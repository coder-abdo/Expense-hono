import { Link } from "@tanstack/react-router";
export const Navbar = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/expenses" className="[&.active]:font-bold">
        expenses
      </Link>
      <Link to="/create-expense" className="[&.active]:font-bold">
        create
      </Link>
      <Link to="/profile" className="[&.active]:font-bold">
        profile
      </Link>
    </div>
  );
};
