
const MySelect = (props)=>{

    return(
        <select className="selected"
        value={props.value}
        onChange={event=>props.setSelectedSort(event.target.value)}
        >
            <option disabled={true} value=''>{props.defaultvalue}</option>
            {props.options.map((option,index)=><option key={index} 
            value={option.value}>{option.name}</option>)}
        </select>
    )
}
export default MySelect;