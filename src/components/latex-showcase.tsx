import { BlockMath, InlineMath } from "react-katex";

export function LatexShowcase() {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:p-8">
      <h2 className="font-display text-2xl text-gray-900">LaTeX Embeddings</h2>
      <p className="mt-4 text-[15px] leading-7 text-gray-600">
        Musical structure and signal theory can live directly inside your notes.
        This site supports inline math like{" "}
        <InlineMath math={"f_n = n\\,f_0"} /> and full display equations.
      </p>

      <div className="mt-6 space-y-5 text-gray-700">
        <BlockMath math={"x(t)=\\sum_{k=1}^{K} a_k \\sin\\left(2\\pi k f_0 t + \\phi_k\\right)"} />
        <BlockMath math={"\\text{Groove}(t)=\\arg\\min_{\\tau}\\;\\|s(t)-m(t-\\tau)\\|_2^2"} />
      </div>
    </section>
  );
}
