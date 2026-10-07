function Sidebar(props) { 
    return (
    <aside> 
        <h2>{props.name}</h2>
         <nav> 
           <p>Welcome to {props.name}</p>
            <p>Projects</p> 
            <p>My Tasks</p> 
            <p>Calendar</p> 
            <p>Settings</p> 
            </nav> 
            </aside>
            ) 
        } 
        export default Sidebar