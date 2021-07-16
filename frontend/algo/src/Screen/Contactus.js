import React from 'react'
import {Container,Navbar, } from 'react-bootstrap'
import Info from './Info';
import {useState} from 'react'
import Staticstic from './Statistic';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SendIcon from '@material-ui/icons/Send';
const Contactus = (props) => {
    const {history} = props
    const [info ,setInfo] = useState(true)
    const [statics,setStatics] = useState(false)
    console.log(info,'info')

    const handlLogout=()=>{
        history.push('/')
    }
    return (
        <div>
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="#"><SendIcon/></Navbar.Brand>
                        <div>                    
                        <button onClick={()=>setInfo(false)} onDoubleClick={()=>setInfo(true)} >Contact Us</button>
                        <button style={{margin:"10px"}} onClick={()=>setStatics(true)} onDoubleClick={()=>setStatics(false)}>Analytics</button>
                        <ExitToAppIcon  style={{ margin: "20px 18px", cursor: "pointer" }} onClick={handlLogout}/>
                        </div>    
                    </Container>  
                </Navbar>
               {info && <Info/>} 
               {statics && <Staticstic/>}
            </Container>
        </div>
    )
}

export default Contactus