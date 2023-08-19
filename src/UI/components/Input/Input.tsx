import React from "react";
import styles from './input.module.scss'

interface InputProps {
    onChange: (value: any) => void,
    value: string,
    placeholder: string,
    type?: string,
    variant?: string,
    className?: string
}

export const Input = ({onChange, value, placeholder, type = 'text', variant = '', className = ''}:InputProps) => {
    return (
        <input
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            type={type}
            className={`${styles.input} ${styles[variant]} ${styles[className]}`} />
    )
}