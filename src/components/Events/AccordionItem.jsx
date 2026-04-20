import { motion, AnimatePresence } from "framer-motion";

export default function AccordionItem({ title, children, isOpen, onClick }) {

  const hasContent =
    children && children.props && children.props.children;

  return (
    <div className="
      border-b border-white/10 py-4
      transition-all duration-300
    ">

      {/* HEADER */}
      <button
        onClick={onClick}
        className="
          flex items-center justify-between w-full text-left
          group
        "
      >
        <span
          className={`text-lg font-semibold transition-colors duration-300 ${
            isOpen ? "text-[#ff9a44]" : "text-white"
          }`}
        >
          {title}
        </span>

        <span
  className={`text-xl transition-colors duration-300 ${
    isOpen ? "text-[#ff9a44]" : "text-gray-400"
  }`}
>
  {isOpen ? "−" : "+"}
</span>
      </button>

      {/* CONTENT */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="
              pt-4 pr-2
              text-gray-300 text-sm leading-relaxed
              max-h-[160px] overflow-y-auto
            ">

              {hasContent ? (
                children
              ) : (
                <span className="text-gray-500">
                  Information coming soon.
                </span>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}