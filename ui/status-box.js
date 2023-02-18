export default function StatusBox({ children, ...rest }) {
  const El = rest.href ? 'a' : 'div'
  return (
    <El className="flex items-start pr-3 md:pr-0 md:pl-3" {...rest}>
      {children}
    </El>
  )
}
