import Button from './Button'

function Card() {
    return(
        <div className='glow-capture'>
            <img/>
            <h4>React Quiz</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua.
            </p>
            <div>
                <Button btnTxt="View live"/>
                <Button btnTxt="View code"/>
            </div>
        </div>
    )
}

export default Card