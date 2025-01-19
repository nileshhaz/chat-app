const GenderCheckBox = ({gender, selectedGender}) => {

  return (
    <div className="flex mt-2">
        <div className="form-control">
            <label className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="checkbox" className="checkbox border-slate-900"
                checked={selectedGender==='male'} onChange={()=> gender('male')}/>
            </label>
        </div>
        <div className="form-control">
        <label className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="checkbox" className="checkbox border-slate-900"
                checked={selectedGender==='female'} onChange={()=> gender('female')}/>
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox