import { motion } from "framer-motion";

export const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            delay: 0.05 + i * 0.06,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export const Reveal = ({
    children,
    as: Tag = "div",
    delay = 0,
    y = 28,
    className = "",
    amount = 0.3,
    ...rest
}) => {
    const MotionTag = motion[Tag] || motion.div;
    return (
        <MotionTag
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            {...rest}
        >
            {children}
        </MotionTag>
    );
};

export const MaskedLine = ({ children, delay = 0, duration = 1.05 }) => (
    <span className="line-mask">
        <motion.span
            className="line-inner"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.span>
    </span>
);


