import "../index.css";

function Header() {
    return(
        <div style={{display:"flex", justifyContent:"space-between", padding:"10px 50px", backgroundColor: "#16213E", height:"50px"}}>
            <div className="headerItems">Home</div>
            <div className="headerItems">Career</div>
            <div className="headerItems">Contact</div>
        </div>
    )
}
export default Header;