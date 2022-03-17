import Navigation from "../components/navigation"
import { connect } from 'react-redux'
// import '../Contact.css'
function Contact(props) {
    return(
        <>
        <div id="about">
        <Navigation/>
        {/* <h1>Contact</h1> */}
        <div id="aboutTextContainer">
           <div id="aboutText">
                FRESco. Soaps is a project made by Amaury and No Forma to be released 
                with the EP FRESco. by Amaury under the name of Yruama. The FRESco. EP was released in March 
                of 2021.<br /><br /> 
                Started as a 
                collaboration with No Forma, and finished solely by 
                Amaury.<br /><br /> 

                Amaury is a multi-disciplinary artist and
                full-stack web developer currently based 
                in Brooklyn, New York. <br /><br /> All soaps are unfortunately
                sold out until further notice.
                
                <br /><br /> If you would like to know
                via email when more soaps will be available, please 
                make sure to subscribe to the newsletter below.
           </div>
        </div>
        </div>
        </>
    )
}



const mapStateToProps = (state) =>{
    return {
       items: state
    }
}


export default connect(mapStateToProps)(Contact)