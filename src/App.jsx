import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/moonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-4">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                        TODO
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-400" />
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-5 pb-4 pt-4">
                    <span className="inline-block h-3 w-3 rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new todo..."
                    />
                </form>
            </header>
            <main className="container mx-auto mt-8 px-4 ">
                <div className="rounded-md bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="text-grey-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="text-grey-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="text-grey-600 grow">
                            Complete online Javascript curse in bluuweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="flex justify-between px-4 py-4">
                        <span className="text-grey-600">5 item left</span>
                        <button className="text-grey-600">
                            Clear Completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </section>

            <p className="mt-10 text-center">Drag and Drop to reorder list</p>
        </div>
    );
};

export default App;
