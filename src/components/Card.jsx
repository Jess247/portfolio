import Badge from './Badge'
import Button from './Button'

function Card({imgSrc, altText}) {
    return(
        <div className='relative my-24'>
            <div className='absolute inset-0 bg-violet-900 rounded-lg blur'></div>
            <div className='relative z-2 bg-neutral-950 p-5 rounded-lg'>
                <img 
                    className="w-1/2 rounded-lg shadow-sm shadow-slate-800"
                    src={imgSrc} 
                    alt={altText}/>
                <h4>React Quiz</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                </p>
                <div>
                    <Button btnTxt="View live"/>
                    <Button btnTxt="View code"/>
                </div>
                <Badge badgeText={["HTML5", "SASS/CSS","JavaScript", "React"]} />
            </div>
        </div>
    )
}

export default Card
