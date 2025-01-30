'use client';

import { SectionTitleProp } from "@/types/types";
import { motion } from "motion/react";

export default function SectionTitle({ title }: SectionTitleProp) {
    return (
        <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5 }}
        >{title}</motion.h2>
    );
}