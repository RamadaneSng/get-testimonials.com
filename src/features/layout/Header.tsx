import LoggedInButton from "../auth/LoggedInButton";

const Header = () => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="font-bold text-lg flex-1">
        get-testimonials.com
      </h1>
      <LoggedInButton />
    </div>
  );
};

export default Header;
