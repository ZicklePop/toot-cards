export default function StatusBox({ children, ...rest }) {
  return (
    <div className="flex pr-3 md:pr-0 md:pl-3" {...rest}>
      {children}
    </div>
  )
}
