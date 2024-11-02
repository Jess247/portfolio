import Badge from './Badge'
import Button from './Button'

function Card({imgSrc, altText}) {
    return(
        <div className='relative my-8 max-w-[900px] lg:w-[50%]'>
            <div className='absolute inset-0 bg-gray-900 md:bg-violet-900 rounded-lg blur'></div>
            <div className='relative z-2 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] p-5 rounded-lg flex flex-col gap-4 md:flex-row md:items-center'>
                <div className='flex flex-col gap-3'>
                    <h4 className='text-lg font-semibold'>React Quiz</h4>
                    <p className='font-thin text-slate-400 max-w-[600px]'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua.
                    </p>
                    <div className='my-2'>
                        <Button btnTxt="View live"/>
                        <Button btnTxt="View code"/>
                    </div>
                    <Badge badgeText={["HTML5", "SASS/CSS","JavaScript", "React"]} />
                </div>
                <img 
                    className="w-1/2 max-w-96 rounded-lg shadow-sm shadow-gray-800"
                    src={imgSrc} 
                    alt={altText}/>
            </div>
        </div>
    )
}

export default Card
