import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
          {/* Blog Title */}
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-400">
            Tailwind CSS v3 vs v4: What's Changed?
          </h1>

          {/* Introduction */}
          <p className="text-lg mb-4">
            Tailwind CSS v4 introduces several **important changes**,
            particularly in how **arbitrary values** and **CSS variables** are
            handled. Below, we compare Tailwind v3 and v4 with examples and a
            syntax comparison table.
          </p>

          {/* Syntax Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-3 border border-gray-700">Feature</th>
                  <th className="p-3 border border-gray-700">
                    Tailwind v3 (Old)
                  </th>
                  <th className="p-3 border border-gray-700">
                    Tailwind v4 (New)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-700">
                    **Custom Colors**
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>text-[#ff5733]</code>
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>text-[#ff5733]</code> (Still Works ✅)
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 border border-gray-700">
                    **CSS Variables**
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>text-[--brand-color]</code> ❌ (Invalid)
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>text-(--brand-color)</code> ✅ (New Syntax)
                  </td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-700">
                    **Custom Widths**
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>w-[calc(100%-4rem)]</code>
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>w-(calc(100%-4rem))</code> ✅
                  </td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 border border-gray-700">
                    **Custom Heights**
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>h-[var(--my-height)]</code>
                  </td>
                  <td className="p-3 border border-gray-700">
                    <code>h-(var(--my-height))</code> ✅
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section: Using CSS Variables */}
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-green-400">
            Using CSS Variables in v4
          </h2>
          <p className="text-lg mb-4">
            In **Tailwind v4**, CSS variables must now use **parentheses `( )`
            instead of square brackets `[ ]`**.
          </p>

          {/* Code Example: Correct Usage */}
          <div className="bg-gray-800 p-4 rounded-md font-mono text-sm">
            <p className="text-green-400">✅ Correct (Tailwind v4)</p>
            <code className="block text-blue-300">
              {`<div className="text-(--brand-color)">Hello World</div>`}
            </code>
          </div>

          {/* Code Example: Incorrect Usage */}
          <div className="bg-gray-800 p-4 rounded-md font-mono text-sm mt-4">
            <p className="text-red-400">
              ❌ Incorrect (Tailwind v3 - Deprecated in v4)
            </p>
            <code className="block text-yellow-300">
              {`<div className="text-[--brand-color]">Hello World</div>`}
            </code>
          </div>

          {/* Section: Using calc() in v4 */}
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-400">
            Using `calc()` in v4
          </h2>
          <p className="text-lg mb-4">
            Tailwind v4 also requires **parentheses** for `calc()` expressions.
          </p>

          {/* Code Example: Using calc() */}
          <div className="bg-gray-800 p-4 rounded-md font-mono text-sm">
            <p className="text-green-400">✅ Correct (Tailwind v4)</p>
            <code className="block text-blue-300">
              {`<div className="w-(calc(100%-4rem))">Content</div>`}
            </code>
          </div>

          {/* Upgrade Tips */}
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-yellow-400">
            Upgrade Tips 🚀
          </h2>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>
              ✅ **Replace** `-[ ]` with `-( )` for variables and `calc()`
              expressions.
            </li>
            <li>
              ✅ **Standard arbitrary values** (e.g., `text-[#ff5733]`) **still
              work**.
            </li>
            <li>
              ✅ **Use `text-(--brand-color)` instead of
              `text-[--brand-color]`**.
            </li>
          </ul>

          {/* Final Note */}
          <p className="mt-4 text-gray-400 text-sm">
            If you're migrating from Tailwind v3 to v4, update your codebase by
            searching for `-[` and replacing it with `-( )` where necessary. 🚀
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
