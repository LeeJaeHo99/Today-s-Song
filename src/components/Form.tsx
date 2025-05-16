"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Modal from "./modal/Modal";

export default function Form({ onSubmit, message, fields }) {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [singer, setSinger] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <form className="form-component" onSubmit={onSubmit}>
                {message && <p className="error-message">{message}</p>}
                {fields.map((field) => {
                    <Label key={field.labelId} {...field} />;
                })}
                <FormBtn />
            </form>
            <Modal />
        </>
    );
}

function Label({ labelTitle, labelId, value, onChange }) {
    return (
        <label htmlFor={labelId}>
            <span>
                {labelTitle} <span>*</span>
            </span>
            <input
                id={labelId}
                type="text"
                value={value}
                placeholder={`${labelTitle}을(/를) 입력해주세요.`}
                onChange={(e) => onChange(e.target.value)}
                required
            />
        </label>
    );
}

function FormBtn() {
    return (
        <button className="form-submit--btn" type="submit">
            <span>제출하기</span>
            <Image
                src={"/icons/arrow.png"}
                width={20}
                height={20}
                alt="arrow-icon"
            />
        </button>
    );
}
