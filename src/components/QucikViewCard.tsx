import { motion } from "framer-motion";

const QuickViewCard = () => {
  return (
    <motion.div
      className="h-16 bg-orange-500 xs:h-auto xs:square"
      whileHover={{ scale: 1.1 }}
    ></motion.div>
  );
};

export default QuickViewCard;
