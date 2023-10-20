

export function MyContainer( { children } ) {
  return (
    <div style= { {display: "grid", placeItems: "center" }}>
        {children}
    </div>
  )
}
