import React from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ children }) => {
  // Convert children into an array of nodes for processing
  const elements = React.Children.toArray(children);

  return (
    <div>
      {elements.map((child, i) => {
        if (typeof child == "string") {
          console.log(child)
          // Split string content into words for animation
          return child.split(" ").map((word, index) => (
            <motion.span
              key={`${i}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 5 + (i + index) / 10,
              }}
            >
              {word}{" "}
            </motion.span>
          ));
        } else {
          // Render elements like <span> directly
          return (
            <motion.span
              key={i}
              className={child.props.className || ""}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5 + i / 10,
              }}
            >
              {child.props.children}{" "}
            </motion.span>
          );
        }
      })}
    </div>
  );
};

export default TextAnimation;
