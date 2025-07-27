const Count= ({count, onLicke})=>{
return (
    <>
    <div className="count" onClick={onLicke}></div>
        <h1>{count}</h1>
    </>
    
)
}

export default Count