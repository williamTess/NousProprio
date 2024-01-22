import Nav from "../Nav";

const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Nav to="/" element={<h1 className="font-bold">Header</h1>} />
        <ul className="flex gap-4">
          <Nav to="/" element={<li>Home</li>} />
          <Nav to="/about" element={<li>About</li>} />
          <Nav to="/sign-in" element={<li>Sign in</li>} />
        </ul>
      </div>
    </div>
  );
};

export default Header;
