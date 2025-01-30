'use client';

import { motion } from "motion/react";

interface SubTitleProp{
    title: React.ReactNode;
}


export default function SubTitle({title}: SubTitleProp){
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