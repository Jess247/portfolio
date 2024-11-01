function Button({btnTxt}) {
   return(
    <button 
        type="button"
        className="bg-slate-700 mr-4 py-1 px-2 rounded-md shadow-sm shadow-slate-700 hover:bg-slate-400">
        {btnTxt}
    </button>)
}

export default Button