import React from "react";
import { FC } from "react";

interface CustomHeaderRendererProps {
  data: {
    text: string;
    level: number;
  };
}

const CustomHeaderRenderer: FC<CustomHeaderRendererProps> = ({ data }) => {
  const { text, level } = data;

  // Define styles based on the header level
  const styles = {
    fontSize:
      level === 1
        ? "2rem"
        : level === 2
        ? "1.75rem"
        : level === 3
        ? "1.5rem"
        : level === 4
        ? "1.25rem"
        : level === 5
        ? "1.1rem"
        : level === 6
        ? "1rem"
        : "0.9rem",
    fontWeight: "bold",
  };

  // Render the header with custom styles
  return React.createElement(`h${level}`, { style: styles }, text);
};

export default CustomHeaderRenderer;
