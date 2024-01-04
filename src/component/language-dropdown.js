const LanguageOption = (props) => {
  return (
    <div style={{width:"10px"}}>
      <select onChange={props.onChange}>
        <option>Select Language</option>
        <option value={"hi"}>Hindi</option>
        <option value={"en"}>English</option>
      </select>
    </div>
  );
};
export default LanguageOption;
