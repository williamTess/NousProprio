import Nav from "../../components/Nav";

export const NotFound = () => {
  return (
    <div className="bg-gradient-to-r from-main to-blue-200">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-main">404</h1>
            <h1 className="text-6xl font-medium py-8">Page introuvable</h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              Oops! La page que vous cherchez n'existe pas. Elle a peut-être été
              déplacé ou supprimé.
            </p>
            <Nav
              to="/"
              element={
                <button className="bg-gradient-to-r from-main to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                  ACCEUIL
                </button>
              }
            />
            <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
