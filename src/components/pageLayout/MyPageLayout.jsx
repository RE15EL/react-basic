import './MyPageLayout.css'

export function MyPageLayout( {children}){
    return (
        <div className="container">
            { children}
        </div>
    )
}