export default function Home() {
  return (
    <div class="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
      <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
        <img
          class="mb-3 w-24 h-auto mx-auto"
          src="https://www.solidjs.com/assets/logo.123b04bc.svg"
          alt="product designer"
        />
        <h1 class="text-lg text-gray-700"> SolidJS </h1>
        <h3 class="text-sm text-gray-400 "> Reactive UI </h3>
        <p class="text-xs text-gray-400 mt-4">
          Solid stands on the shoulders of giants, particularly React and
          Knockout. If you've developed with React Hooks before, Solid should
          seem very natural. In fact, more natural as Solid's model is much
          simpler with no Hook rules. Every Component executes once and it is
          the Hooks and bindings that execute many times as their dependencies
          update.
        </p>
        <a
          href="https://www.solidjs.com/"
          class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide inline-block"
        >
          Get to know more
        </a>
      </div>
    </div>
  );
}
