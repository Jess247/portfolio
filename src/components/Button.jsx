function Button({btnTxt,url,code}) {
   return(
    <a 
        href={url !== undefined ? url : code}
        type="button"
        className="bg-slate-700 mr-4 py-1 px-2 rounded-md shadow-sm shadow-slate-700 hover:bg-slate-400">
        {btnTxt}
    </a>)
}

export default Button