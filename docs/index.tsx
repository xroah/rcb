import React from "react"
import { createRoot } from "react-dom/client"

const el = document.createElement("div")
const root = createRoot(el)

root.render(<h1>Hello World</h1>)
document.body.appendChild(el)