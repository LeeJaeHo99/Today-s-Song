'use client';

import { motion } from "motion/react";
import { TitleProp } from "@/types/types";



export default function SubTitle({title}: TitleProp){
    return (
        <motion.h3 
            className="sub-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.7 }}
            >{title}</motion.h3>
    );
}