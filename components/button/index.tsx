import { MotionButton } from "@/components/framer-motion/button";

import styles from "./styles.module.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?: "1" | "2" | "3" | "4";
  variant?: "primary" | "secondary" | "tertiary";
  corners?: "circle" | "rounded";
  loading?: boolean;
  disabled?: boolean;
  fit?: boolean | "square";
}

export const Button = ({
  size = "2",
  variant = "primary",
  corners = "rounded",
  loading = false,
  disabled = false,
  fit = false,
  ...props
}: ButtonProps) => (
  <MotionButton
    data-fit={fit}
    data-size={size}
    data-radius={corners}
    data-variant={variant}
    data-loading={loading}
    data-disabled={disabled}
    className={styles.button}
  >
    {props.children}
  </MotionButton>
);

export default Button;
