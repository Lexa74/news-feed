import React from "react";
import styles from './button.module.scss'

interface ButtonLightProps {
    children: React.ReactNode,
    onClick: () => void
    variant: string,
    className?: string
}

export const Button = ({children, onClick, variant, className = ''}: ButtonLightProps) => {
    return <button onClick={() => onClick()} className={`${styles.btn} ${styles[variant]} ${styles[className]}`}>{children}</button>
}