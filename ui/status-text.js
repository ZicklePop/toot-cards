export default function StatusText({ children, ...rest }) {
  return (
    <div className="pl-1" {...rest}>
      {children}
    </div>
  )
}
