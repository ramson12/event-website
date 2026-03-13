import { motion } from "framer-motion";

export default function AccordionItem({ title, children, isOpen, onClick }) {

  const hasContent =
    children && children.props && children.props.children;

  return (
    <div className="border-b border-zinc-700 py-4">

      {/* HEADER */}
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-left"
      >
        <span className="text-lg font-semibold">
          {title}
        </span>

        <span className="text-xl text-gray-400">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* CONTENT */}
      <motion.div
        animate={{ height: isOpen ? 120 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="h-[120px] overflow-y-auto pr-2 text-gray-300 text-sm leading-relaxed pt-4">

          {hasContent ? (
            children
          ) : (
            <span className="text-gray-500">
              Information coming soon.
            </span>
          )}

        </div>
      </motion.div>

    </div>
  );
}