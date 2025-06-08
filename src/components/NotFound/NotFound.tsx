export default function NotFound({Reload}: {Reload: () => void}) {
  return (
    <main>
      <div className="max-w-screen-xl mt-50 px-4 flex items-center justify-start md:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-accent text-4xl font-semibold sm:text-5xl">
            Page not found
          </h3>
          <p className="text-accent mt-3">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <button onClick={Reload} className="bg-accent/20 hover:bg-accent/40 px-3 py-2 cursor-pointer rounded-md mt-4">Reload</button>
        </div>
      </div>
    </main>
  );
}
