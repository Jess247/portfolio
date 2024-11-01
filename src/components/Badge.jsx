function Badge({badgeText}){
    return(
        <div className="flex gap-2" >
            {badgeText.map(badge => {
                return(
                    <span className="bg-violet-400 py-1 px-2 rounded-full text-violet-950 text-sm font-light my-2">{badge}</span>
                    )}
            )}
        </div>
    )
}

export default Badge