'use client'

import { createPortal } from 'react-dom'

export default function Portal({ children }) {
  const portalRoot = document.getElementById('portal-root')
  return createPortal(children, portalRoot)
}
