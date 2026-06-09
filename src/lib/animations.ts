import { easeOut } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [easeOut],
    },
  }),
};

export const viewportConfig = { once: true, amount: 0.3 } as const;
