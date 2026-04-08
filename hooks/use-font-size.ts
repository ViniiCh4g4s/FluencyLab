"use client"

import { useCallback, useEffect, useState } from "react"

export type FontSize = "normal" | "large"

const KEY = "fluency-lab:fontSize"

function applyClass(size: FontSize) {
    document.documentElement.classList.toggle("font-large", size === "large")
}

export function useFontSize() {
    const [fontSize, setFontSize] = useState<FontSize>("normal")

    useEffect(() => {
        const stored = (localStorage.getItem(KEY) as FontSize) || "normal"
        setFontSize(stored)
        applyClass(stored)
    }, [])

    const toggle = useCallback((value: FontSize) => {
        setFontSize(value)
        localStorage.setItem(KEY, value)
        applyClass(value)
    }, [])

    return { fontSize, toggle }
}
